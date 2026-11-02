using UnityEngine;

public class PlayerMovement : MonoBehaviour
{
    [Header("Настройки движения")]
    [SerializeField] private float moveSpeed = 5f;
    [SerializeField] private float boundary = 20f;

    [Header("Настройки поворота")]
    [SerializeField] private float rotationSpeed = 12f;
    [SerializeField] private float inputDeadZone = 0.1f;

    [Header("Управление")]
    [Tooltip("Ссылка на UI-джойстик (для мобильного управления). Опционально.")]
    [SerializeField] private VirtualJoystick joystick;

    private Rigidbody rb;
    private Vector3 inputDirection;
    [SerializeField] private Animator animator;
    private static readonly int SpeedHash = Animator.StringToHash("Speed");

    void Awake()
    {
        rb = GetComponent<Rigidbody>();
        rb.useGravity = false;
        rb.constraints = RigidbodyConstraints.FreezeRotation | RigidbodyConstraints.FreezePositionY;
    }

    void Update()
    {
        Vector2 input = ReadInput();

        if (input.sqrMagnitude > 1f) input.Normalize();
        inputDirection = new Vector3(input.x, 0f, input.y);

        if (inputDirection.sqrMagnitude > inputDeadZone * inputDeadZone)
        {
            RotateTowardsMovement();
        }

        if (animator != null)
        {
            animator.SetFloat(SpeedHash, input.magnitude);
        }
    }

    private Vector2 ReadInput()
    {
        if (joystick != null && joystick.Input1.sqrMagnitude > 0.001f)
            return joystick.Input1;

        return Vector2.zero;
    }

    private void RotateTowardsMovement()
    {
        Quaternion targetRotation = Quaternion.LookRotation(inputDirection, Vector3.up);

        transform.rotation = Quaternion.Slerp(
            transform.rotation,
            targetRotation,
            rotationSpeed * Time.deltaTime
        );
    }

    void FixedUpdate()
    {
        Vector3 newPos = rb.position + inputDirection * moveSpeed * Time.fixedDeltaTime;

        newPos.x = Mathf.Clamp(newPos.x, -boundary, boundary);
        newPos.z = Mathf.Clamp(newPos.z, -boundary, boundary);
        newPos.y = rb.position.y;

        rb.MovePosition(newPos);
    }
}
