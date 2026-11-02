using UnityEngine;
using UnityEngine.UI;
using TMPro;
using DG.Tweening;

public class UIManager : MonoBehaviour
{
    public static UIManager Instance { get; private set; }

    [Header("Счётчик монет")]
    [SerializeField] private TextMeshProUGUI coinText;
    [SerializeField] private string counterFormat = "{0} / {1}";

    [Header("Панель победы")]
    [SerializeField] private GameObject winPanel;
    [SerializeField] private RectTransform victoryImage;
    [SerializeField] private Button ctaButton;
    [SerializeField] private string ctaUrl = "https://play.google.com/store";

    [Header("Анимация панели победы")]
    [SerializeField] private Vector3 winPanelStartScale = new Vector3(0.6f, 0.6f, 1f);
    [SerializeField] private float winPanelFadeDuration = 0.25f;
    [SerializeField] private float winPanelScaleDuration = 0.5f;
    [SerializeField] private float victoryImageDelay = 0.2f;
    [SerializeField] private float victoryImageDuration = 0.5f;
    [SerializeField] private float victoryImageStartRotation = -20f;
    [SerializeField] private float victoryImagePunch = 0.1f;
    [SerializeField] private bool enableVictoryPulse = true;
    [SerializeField] private float victoryPulseScale = 0.08f;
    [SerializeField] private float victoryPulseDuration = 0.7f;
    [SerializeField] private float victoryPulseDelay = 0.4f;

    [Header("Летящая монета")]
    [SerializeField] private Sprite flyingCoinSprite;
    [SerializeField] private float flyingCoinSize = 90f;
    [SerializeField] private float flyingCoinDuration = 0.6f;
    [SerializeField] private float flyingCoinEndScale = 0.35f;
    [SerializeField] private float flyingCoinArc = 150f;
    [SerializeField] private float punchStrength = 0.3f;
    [SerializeField] private float punchDuration = 0.25f;

    [Header("Покачивание кнопки CTA")]
    [SerializeField] private bool enableButtonPulse = true;
    [SerializeField] private float pulseScale = 0.06f;
    [SerializeField] private float pulseDuration = 0.7f;
    [SerializeField] private bool enableButtonSway = true;
    [SerializeField] private float swayAngle = 4f;
    [SerializeField] private float swayDuration = 1.2f;
    [SerializeField] private Camera worldCamera;

    public Canvas Canvas { get; private set; }

    private Vector3 ctaInitialScale = Vector3.one;
    private Vector3 ctaInitialRotation = Vector3.zero;
    private CanvasGroup winPanelCanvasGroup;
    private bool winPanelAnimating;

    void Awake()
    {
        if (Instance != null && Instance != this) { Destroy(gameObject); return; }
        Instance = this;

        Canvas = GetComponentInParent<Canvas>();
        if (Canvas == null) Canvas = FindObjectOfType<Canvas>();

        if (winPanel != null)
        {
            winPanelCanvasGroup = winPanel.GetComponent<CanvasGroup>();
            if (winPanelCanvasGroup == null)
                winPanelCanvasGroup = winPanel.AddComponent<CanvasGroup>();
        }

        ResolveWorldCamera();
    }

    void Start()
    {
        if (winPanel) winPanel.SetActive(false);
        if (ctaButton) ctaButton.onClick.AddListener(OnCtaClicked);
        StartCtaIdleAnimation();
    }

    private void ResolveWorldCamera()
    {
        if (worldCamera != null) return;

        worldCamera = Camera.main;
        if (worldCamera != null) return;

        Camera[] allCams = Camera.allCameras;
        for (int i = 0; i < allCams.Length; i++)
        {
            if (Canvas != null && allCams[i] == Canvas.worldCamera) continue;
            worldCamera = allCams[i];
            return;
        }
    }

    private void StartCtaIdleAnimation()
    {
        if (ctaButton == null) return;
        var rect = ctaButton.transform as RectTransform;
        if (rect == null) return;

        ctaInitialScale = rect.localScale;
        ctaInitialRotation = rect.localEulerAngles;

        if (enableButtonPulse && pulseScale > 0f)
        {
            rect.DOKill();
            rect.localScale = ctaInitialScale;
            rect.DOScale(ctaInitialScale * (1f + pulseScale), pulseDuration)
                .SetEase(Ease.InOutSine)
                .SetLoops(-1, LoopType.Yoyo)
                .SetId("CtaPulse")
                .SetLink(ctaButton.gameObject);
        }

        if (enableButtonSway && swayAngle > 0f)
        {
            Vector3 leftRot = ctaInitialRotation + new Vector3(0f, 0f, swayAngle);
            rect.localEulerAngles = ctaInitialRotation;
            rect.DORotate(leftRot, swayDuration, RotateMode.Fast)
                .SetEase(Ease.InOutSine)
                .SetLoops(-1, LoopType.Yoyo)
                .SetId("CtaSway")
                .SetLink(ctaButton.gameObject);
        }
    }

    public void SetCoinText(int current, int total)
    {
        if (coinText != null)
            coinText.text = string.Format(counterFormat, current, total);
    }

    public void ShowWinPanel()
    {
        if (winPanel == null || winPanelAnimating) return;
        winPanelAnimating = true;

        winPanel.SetActive(true);

        var panelRect = winPanel.transform as RectTransform;

        if (winPanelCanvasGroup != null) winPanelCanvasGroup.interactable = false;
        if (winPanelCanvasGroup != null) winPanelCanvasGroup.blocksRaycasts = false;

        if (panelRect != null) panelRect.DOKill();
        if (winPanelCanvasGroup != null) winPanelCanvasGroup.DOKill();
        if (victoryImage != null) victoryImage.DOKill();

        if (winPanelCanvasGroup != null) winPanelCanvasGroup.alpha = 0f;
        if (panelRect != null) panelRect.localScale = winPanelStartScale;
        if (victoryImage != null)
        {
            victoryImage.localScale = Vector3.zero;
            victoryImage.localEulerAngles = new Vector3(0f, 0f, victoryImageStartRotation);
        }

        Sequence mainSeq = DOTween.Sequence();

        if (winPanelCanvasGroup != null)
            mainSeq.Join(winPanelCanvasGroup.DOFade(1f, winPanelFadeDuration).SetEase(Ease.OutQuad));

        if (panelRect != null)
            mainSeq.Join(panelRect.DOScale(Vector3.one, winPanelScaleDuration).SetEase(Ease.OutBack, 1.2f));

        if (victoryImage != null)
        {
            Sequence victorySeq = DOTween.Sequence();
            victorySeq.SetDelay(victoryImageDelay);
            victorySeq.Append(victoryImage.DOScale(Vector3.one, victoryImageDuration).SetEase(Ease.OutBack, 1.2f));
            victorySeq.Join(victoryImage.DORotate(Vector3.zero, victoryImageDuration).SetEase(Ease.OutBack));
            victorySeq.OnComplete(() =>
            {
                if (victoryImage == null) return;
                victoryImage.DOPunchScale(Vector3.one * victoryImagePunch, 0.35f, 6, 0.5f)
                    .OnComplete(() => StartVictoryPulse());
            });
        }

        mainSeq.OnComplete(() =>
        {
            if (winPanelCanvasGroup != null)
            {
                winPanelCanvasGroup.interactable = true;
                winPanelCanvasGroup.blocksRaycasts = true;
            }
            winPanelAnimating = false;
        });
    }

    private void StartVictoryPulse()
    {
        if (!enableVictoryPulse || victoryImage == null || victoryPulseScale <= 0f)
            return;

        victoryImage.DOKill();
        victoryImage.localScale = Vector3.one;

        victoryImage
            .DOScale(Vector3.one * (1f + victoryPulseScale), victoryPulseDuration)
            .SetEase(Ease.InOutSine)
            .SetLoops(-1, LoopType.Yoyo)
            .SetDelay(victoryPulseDelay)
            .SetId("VictoryPulse")
            .SetLink(victoryImage.gameObject);
    }

    public void HideWinPanel()
    {
        if (winPanel == null) return;
        if (victoryImage != null) victoryImage.DOKill();
        DOTween.Kill("VictoryPulse");
        winPanel.SetActive(false);
        winPanelAnimating = false;
    }

    public void SpawnFlyingCoin([Bridge.Ref] Vector3 worldStartPos, System.Action onArrive)
    {
        if (Canvas == null || coinText == null)
        {
            onArrive?.Invoke();
            return;
        }

        RectTransform canvasRect = Canvas.GetComponent<RectTransform>();
        if (canvasRect == null)
        {
            onArrive?.Invoke();
            return;
        }

        ResolveWorldCamera();

        Vector2 screenStart;
        if (worldCamera != null)
        {
            Vector3 projected = worldCamera.WorldToScreenPoint(worldStartPos);
            if (projected.z > 0f)
                screenStart = new Vector2(projected.x, projected.y);
            else
                screenStart = new Vector2(Screen.width * 0.5f, Screen.height * 0.5f);
        }
        else
        {
            screenStart = new Vector2(Screen.width * 0.5f, Screen.height * 0.5f);
        }

        Camera coordCamera = Canvas.renderMode == RenderMode.ScreenSpaceOverlay
            ? null
            : Canvas.worldCamera;

        Vector2 screenTarget;
        if (Canvas.renderMode == RenderMode.ScreenSpaceOverlay)
        {
            screenTarget = coinText.rectTransform.position;
        }
        else
        {
            screenTarget = RectTransformUtility.WorldToScreenPoint(
                coordCamera, coinText.rectTransform.position);
        }

        Vector2 localStart, localTarget;
        RectTransformUtility.ScreenPointToLocalPointInRectangle(
            canvasRect, screenStart, coordCamera, out localStart);
        RectTransformUtility.ScreenPointToLocalPointInRectangle(
            canvasRect, screenTarget, coordCamera, out localTarget);

        var go = new GameObject("FlyingCoin", typeof(RectTransform), typeof(Image));
        go.transform.SetParent(Canvas.transform, false);
        var rect = go.GetComponent<RectTransform>();
        var img = go.GetComponent<Image>();
        img.sprite = flyingCoinSprite;
        img.raycastTarget = false;
        img.preserveAspect = true;
        rect.sizeDelta = new Vector2(flyingCoinSize, flyingCoinSize);
        rect.localScale = Vector3.one;

        rect.anchorMin = new Vector2(0.5f, 0.5f);
        rect.anchorMax = new Vector2(0.5f, 0.5f);
        rect.pivot = new Vector2(0.5f, 0.5f);

        rect.anchoredPosition = localStart;
        Vector2 mid = (localStart + localTarget) * 0.5f;
        mid.y += flyingCoinArc + Mathf.Abs(localTarget.x - localStart.x) * 0.2f;

        float half = flyingCoinDuration * 0.5f;
        Sequence seq = DOTween.Sequence();
        seq.Append(rect.DOAnchorPos(mid, half).SetEase(Ease.OutQuad));
        seq.Append(rect.DOAnchorPos(localTarget, half).SetEase(Ease.InQuad));
        seq.Join(rect.DOScale(Vector3.one * flyingCoinEndScale, flyingCoinDuration).SetEase(Ease.InQuad));
        seq.OnComplete(() =>
        {
            onArrive?.Invoke();
            PunchCoinText();
            Destroy(go);
        });
    }

    private void PunchCoinText()
    {
        if (coinText == null) return;
        coinText.rectTransform.DOKill();
        coinText.rectTransform.localScale = Vector3.one;
        coinText.rectTransform.DOPunchScale(
            Vector3.one * punchStrength, punchDuration, 8, 0.5f);
    }

    private void OnCtaClicked()
    {
        Luna.Unity.Playable.InstallFullGame();

#if UNITY_EDITOR
        Application.OpenURL(ctaUrl);
#endif
    }
}