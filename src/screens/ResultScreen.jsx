import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useQuiz } from "../components/QuizContext";
import styles from "./resultscreen.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faGears,
  faArrowRotateRight,
  faSquarePollHorizontal,
} from "@fortawesome/free-solid-svg-icons";

function ResultScreen() {
  const { questions, userAnswers, quizSettings, resetQuiz } = useQuiz();

  const navigate = useNavigate();
  const [openIndex, setOpenIndex] = useState(null);

  if (!questions || questions.length === 0) {
    navigate("/", { replace: true });
    return null;
  }

  const correctCount = userAnswers.filter((a) => a.selected?.isCorrect).length;

  const percentage = Math.round((correctCount / questions.length) * 100);

  const toggleQuestion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const retrySameSettings = () => {
    resetQuiz();
    navigate("/loader");
  };

  const getProgressColor = (pct) => {
    if (pct < 30) return "#ff4d4d"; // Red
    if (pct < 50) return "#ffd700"; // Yellow
    if (pct < 70) return "#adff2f"; // Yellow-Green
    return "#34f848"; // Green
  };

  const dynamicColor = getProgressColor(percentage);

  // This creates the "partial border" fill effect
  const ringStyle = {
    background: `conic-gradient(${dynamicColor} ${percentage}%, #333 0%)`,
  };

  return (
    <div className={styles.resultScreen}>
      {/* ===== SUMMARY ===== */}
      <div className={styles.summary}>
        <h1 className={styles.result}>
          <FontAwesomeIcon icon={faSquarePollHorizontal} size="lg" /> Result
        </h1>

        {/* <h3>Question Analysis</h3> */}
        <div className={styles.meta}>
          <p className={styles.metadata}>
            Number of Questions: {questions.length}
          </p>
          <span>
            <p className={styles.metadata}>Correct: {correctCount} </p>
            {/* <p className={styles.metadata}>
              Incorrect: {questions.length - correctCount}
            </p> */}
          </span>
        </div>
      </div>

      <div className={styles.summaryAccuracy} style={ringStyle}>
        <div className={styles.innerCircle}>
          <p style={{ color: dynamicColor }}>{percentage}%</p>
        </div>
      </div>

      {/* <div className={styles.summaryAccuracy}>
        <p>{percentage}% </p>
      </div> */}

      {/* ===== QUESTION REVIEW ===== */}
      <div className={styles.review}>
        {questions.map((q, index) => {
          const userAnswer = userAnswers.find((a) => a.questionIndex === index);

          return (
            <div key={index} className={styles.questionBlock}>
              <div
                className={styles.questionHeader}
                onClick={() => toggleQuestion(index)}
              >
                {openIndex === index ? "▼" : "▶"} Question {index + 1}
              </div>

              {openIndex === index && (
                <div className={styles.questionBody}>
                  <p dangerouslySetInnerHTML={{ __html: q.question }} />

                  {q.options.map((opt) => {
                    const isUserChoice =
                      userAnswer?.selected?.value === opt.value;

                    return (
                      <div
                        key={opt.letter}
                        className={`${styles.option}
                          ${opt.isCorrect ? styles.correct : ""}
                          ${isUserChoice && !opt.isCorrect ? styles.wrong : ""}
                        `}
                      >
                        <strong>{opt.letter}.</strong>{" "}
                        <span dangerouslySetInnerHTML={{ __html: opt.value }} />
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* ===== ACTIONS ===== */}
      <div className={styles.actions}>
        <button className={styles.button} onClick={retrySameSettings}>
          <FontAwesomeIcon icon={faArrowRotateRight} size="sm" /> Try Again
        </button>
        <button className={styles.button} onClick={() => navigate("/")}>
          <FontAwesomeIcon icon={faGears} size="sm" /> Change Settings
        </button>
        <button className={styles.button} onClick={() => navigate("/")}>
          <FontAwesomeIcon icon={faHouse} size="sm" /> Home
        </button>
      </div>
    </div>
  );
}

export default ResultScreen;
