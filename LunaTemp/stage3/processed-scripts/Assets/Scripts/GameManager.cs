using UnityEngine;
using UnityEngine.Events;

public class GameManager : MonoBehaviour
{
    public static GameManager Instance { get; private set; }

    [Header("Ссылки")]
    [SerializeField] private UIManager uiManager;

    [Header("События (опционально — для Playworks-хуков)")]
    public UnityEvent onGameWin;
    public UnityEvent<int, int> onCoinCountChanged;

    private int totalCoins;
    private int collected;
    private bool isWon;

    public int Collected => collected;
    public int Total => totalCoins;

    void Awake()
    {
        if (Instance != null && Instance != this) { Destroy(gameObject); return; }
        Instance = this;
    }

    void Start()
    {
        totalCoins = FindObjectsOfType<Coin>().Length;
        collected = 0;
        isWon = false;

        if (uiManager != null)
            uiManager.SetCoinText(collected, totalCoins);

        onCoinCountChanged?.Invoke(collected, totalCoins);
    }

    public void OnCoinCollected()
    {
        if (isWon) return;

        collected++;
        if (uiManager != null)
            uiManager.SetCoinText(collected, totalCoins);

        onCoinCountChanged?.Invoke(collected, totalCoins);

        if (collected >= totalCoins)
            Win();
    }

    private void Win()
    {
        isWon = true;
        if (uiManager != null)
            uiManager.ShowWinPanel();

        onGameWin?.Invoke();
    }
}
