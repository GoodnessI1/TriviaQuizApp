import React, { useEffect, useState, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { fetchQuestions } from "../utils/utils";
import { useQuiz } from "../components/QuizContext";
import styles from "./gameloader.module.css";

function GameLoader() {
  const location = useLocation();
  const navigate = useNavigate();
  const { quizSettings, setQuestions } = useQuiz();
  const [error, setError] = useState(null);
  
  // 1. THIS IS THE KEY: A Ref to track if we have already started a fetch
  const fetchLock = useRef(false);

  const params = location.state?.params || quizSettings;

  useEffect(() => {
    if (!params) {
      navigate("/", { replace: true });
      return;
    }

    // 2. If the lock is true, exit immediately. 
    // This stops the second React Strict Mode call from hitting the API.
    if (fetchLock.current) return;
    
    // Set the lock to true
    fetchLock.current = true;

    async function load() {
      try {
        console.log("Fetching questions..."); // Check your console - this should now only appear ONCE
        const data = await fetchQuestions(params);
        
        if (data && data.length > 0) {
          setQuestions(data);
          navigate("/game");
        } else {
          throw new Error("The API returned no questions. Try different settings.");
        }
      } catch (err) {
        setError(err.message);
        // If it failed, allow a retry by resetting the lock
        fetchLock.current = false; 
      }
    }

    load();
  }, [params, navigate, setQuestions]);

  if (error) {
    return (
      <div style={{ textAlign: "center", marginTop: "5rem", padding: "20px" }}>
        <h2 style={{ color: "#e74c3c" }}>Wait a moment...</h2>
        <p>{error.includes("429") ? "The API is busy. Please wait 5 seconds before retrying." : error}</p>
        <button 
          onClick={() => {
            setError(null);
            fetchLock.current = false; // Reset lock for manual retry
            navigate("/");
          }}
          style={{ padding: "10px 20px", marginTop: "10px", cursor: "pointer" }}
        >
          Go Back & Try Again
        </button>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <div className={styles.loader}></div>
      <h2>Preparing your Quiz...</h2>
      {/* <p>Talking to the trivia servers...</p> */}
    </div>
  );
}

export default GameLoader;




























// import React, { useEffect } from "react";
// import { useLocation, useNavigate } from "react-router-dom";
// import { fetchQuestions } from "../utils/utils";
// import { useQuiz } from "../components/QuizContext";

// function GameLoader() {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const { quizSettings, setQuestions } = useQuiz();

//   const { params } = location.state || {};

//   useEffect(() => {
//     if (!params) {
//       navigate("/", { replace: true });
//       return;
//     }

//     async function load() {
//       const questions = await fetchQuestions(params);
//       setQuestions(questions);
//       navigate("/game");
//     }

//     load();
//   }, [params, navigate, setQuestions]);

//   useEffect(() => {
//     if (!quizSettings) return;

//     fetchQuestions(quizSettings).then((data) => {
//       setQuestions(data);
//       navigate("/game");
//     });
//   }, [quizSettings]);

//   return (
//     <div style={{ textAlign: "center", marginTop: "5rem" }}>
//       <h2>Loading your game...</h2>
//       <p>Please wait while we prepare the quiz!</p>
//     </div>
//   );
// }

// export default GameLoader;
