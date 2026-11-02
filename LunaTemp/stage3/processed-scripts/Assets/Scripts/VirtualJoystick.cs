using UnityEngine;

public class VirtualJoystick : MonoBehaviour
{
    [Header("Ссылки")]
    [SerializeField] private RectTransform background;
    [SerializeField] private RectTransform handle;

    [Header("Настройки")]
    [SerializeField] private float handleRange = 60f;

    public Vector2 Input1 { get; private set; }

    private bool isDragging;
    private Canvas canvas;

    private void Awake()
    {
        if (background == null) background = GetComponent<RectTransform>();
        canvas = GetComponentInParent<Canvas>();

        if (handle != null)
        {
            handle.anchorMin = new Vector2(0.5f, 0.5f);
            handle.anchorMax = new Vector2(0.5f, 0.5f);
            handle.pivot = new Vector2(0.5f, 0.5f);
            handle.anchoredPosition = Vector2.zero;
        }
        ResetHandle();
    }

    private void Update()
    {
        if (Input.GetMouseButtonDown(0))
        {
            if (RectTransformUtility.RectangleContainsScreenPoint(background, Input.mousePosition, canvas.worldCamera))
            {
                isDragging = true;
                ProcessInput(Input.mousePosition);
            }
        }

        if (isDragging && Input.GetMouseButton(0))
            ProcessInput(Input.mousePosition);

        if (isDragging && Input.GetMouseButtonUp(0))
        {
            isDragging = false;
            Input1 = Vector2.zero;
            ResetHandle();
        }
    }

    private void ProcessInput([Bridge.Ref] Vector2 screenPosition)
    {
        Vector2 localPoint;
        if (RectTransformUtility.ScreenPointToLocalPointInRectangle(
            background, screenPosition, canvas.worldCamera, out localPoint))
        {
            if (localPoint.magnitude > handleRange)
                localPoint = localPoint.normalized * handleRange;

            if (handle != null)
            {
                handle.localPosition = localPoint;
            }

            Input1 = localPoint / handleRange;
        }
    }

    private void ResetHandle()
    {
        if (handle != null) handle.localPosition = Vector3.zero;
    }
}