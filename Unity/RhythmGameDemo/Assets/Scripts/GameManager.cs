using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class GameManager : MonoBehaviour
{
    public AudioSource theMusic;
    public bool startPlaying = false;
    public BeatScroller theBS;
    public static GameManager instance;
    public int currentScore, scorePerNote=100;
    public int greatNoteModifier = 25, perfectNoteModifier = 50;
    public Text scoreText, multiText, hitText;
    public int currentMultiplier, multiplierTracker;
    public int[] multiplierThresholds;
    private float totalNotes, normalHits, goodHits, perfectHits, missedHits;
    public GameObject resultsScreen;
    public Text percentHitText, normalsText, goodsText, perfectText, missesText, rankText, finalScoreText;


   // private string arrowBeats = "lldurlldur";

    // Start is called before the first frame update
    void Start()
    {
        instance = this;
        scoreText.text = "Score: 0";
        currentMultiplier = 1;

        totalNotes = FindObjectsOfType<NoteObject>().Length;
    }

    // Update is called once per frame
    void Update()
    {
        if (!startPlaying)
        {
            if (Input.anyKeyDown)
            {
                startPlaying = true;
                theBS.hasStarted = true;
                theMusic.Play();
            }
        }
        else
        {
            if (!theMusic.isPlaying && !resultsScreen.activeInHierarchy)
            {
                resultsScreen.SetActive(true);
                float totalHit = ((totalNotes - missedHits) / totalNotes) * 100f;
                normalsText.text = normalHits.ToString();
                goodsText.text = goodHits.ToString();
                perfectText.text = perfectHits.ToString();
                missesText.text = missedHits.ToString();
                percentHitText.text = totalHit.ToString("F1") + "%";
                finalScoreText.text = currentScore.ToString();
            }
        }
    }
    public void NoteHit(int scoreModifier)
    {
        
        if (currentMultiplier - 1 < multiplierThresholds.Length) {
            multiplierTracker++;
            if (multiplierThresholds[currentMultiplier - 1] <= multiplierTracker)
            {
                multiplierTracker = 0;
                currentMultiplier++;
            }
        }
        currentScore += (scorePerNote+scoreModifier)*currentMultiplier;
        scoreText.text = "Score: " + currentScore;
        multiText.text = "Multiplier: x" + currentMultiplier;
    }
    public void NoteMissed()
    {
        currentMultiplier = 1;
        multiplierTracker = 0;
        multiText.text = "Multiplier: x" + currentMultiplier;
        missedHits++;
    }

    public void NormalHit()
    {
        
        NoteHit(0);
        normalHits++;
        

    }
    public void GoodHit()
    {
        NoteHit(greatNoteModifier);
        goodHits++;
        
    }
    public void PerfectHit()
    {
        NoteHit(perfectNoteModifier);
        perfectHits++;
        
    }
}
