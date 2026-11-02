using UnityEngine;
using DG.Tweening;

public class Coin : MonoBehaviour
{
    [Header("Анимация вращения")]
    [SerializeField] private float rotateDuration = 2f;
    [SerializeField] private RotateMode rotateMode = RotateMode.FastBeyond360;

    [Header("Анимация подпрыгивания")]
    [SerializeField] private float bobAmplitude = 0.15f;
    [SerializeField] private float bobDuration = 1f;

    private Vector3 startPos;
    private bool collected = false;
    private Collider col;
    private Renderer[] renderers;
    private Tween rotateTween;
    private Tween bobTween;

    void Awake()
    {
        col = GetComponent<Collider>();
        col.isTrigger = true;
        renderers = GetComponentsInChildren<Renderer>();
        startPos = transform.position;
    }

    void Start()
    {
        rotateTween = transform
            .DORotate(new Vector3(0f, 360f, 0f), rotateDuration, rotateMode)
            .SetEase(Ease.Linear)
            .SetLoops(-1, LoopType.Incremental);

        bobTween = DOTween.Sequence()
            .Append(transform.DOMoveY(startPos.y + bobAmplitude, bobDuration / 2f).SetEase(Ease.InOutSine))
            .Append(transform.DOMoveY(startPos.y - bobAmplitude, bobDuration).SetEase(Ease.InOutSine))
            .Append(transform.DOMoveY(startPos.y, bobDuration / 2f).SetEase(Ease.InOutSine))
            .SetLoops(-1)
            .SetLink(gameObject);
    }

    void OnTriggerEnter(Collider other)
    {
        if (collected) return;
        if (!other.CompareTag("Player")) return;
        Collect();
    }

    private void Collect()
    {
        collected = true;
        col.enabled = false;
        rotateTween?.Kill();
        bobTween?.Kill();

        foreach (var r in renderers) r.enabled = false;

        Vector3 worldPos = transform.position;

        if (UIManager.Instance != null)
        {
            UIManager.Instance.SpawnFlyingCoin(worldPos, () =>
            {
                if (GameManager.Instance != null)
                    GameManager.Instance.OnCoinCollected();
            });
        }
        else
        {
            if (GameManager.Instance != null)
                GameManager.Instance.OnCoinCollected();
        }

        Destroy(gameObject);
    }
}