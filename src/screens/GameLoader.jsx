import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { fetchQuestions } from "../utils/utils";
import { useQuiz } from "../components/QuizContext";

function GameLoader() {
  const location = useLocation();
  const navigate = useNavigate();
  const { setQuestions } = useQuiz();

  const { params } = location.state || {};

  useEffect(() => {
    if (!params) {
      navigate("/", { replace: true });
      return;
    }

    async function load() {
      const questions = await fetchQuestions(params);
      setQuestions(questions);
      navigate("/game");
    }

    load();
  }, [params, navigate, setQuestions]);

  return (
    <div style={{ textAlign: "center", marginTop: "5rem" }}>
      <h2>Loading your game...</h2>
      <p>Please wait while we prepare the quiz!</p>
    </div>
  );
}

export default GameLoader;















// import React, { useEffect, useState } from "react";
// import { useLocation, useNavigate } from "react-router-dom";
// import { getQuizQuestions } from "../utils/quizApi";
// import { useQuiz } from "../context/QuizContext";

// export default function GameLoader() {
//   const { state: settings } = useLocation();
//   const navigate = useNavigate();
//   const { setQuestions, setUserAnswers, setStartedAt } = useQuiz();
//   const [error, setError] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     async function load() {
//       setLoading(true);
//       setError(null);
//       setUserAnswers([]); // reset previous answers
//       try {
//         const questions = await getQuizQuestions(settings || {});
//         if (!questions || questions.length === 0) {
//           setError("No questions returned. Try different settings.");
//           setLoading(false);
//           return;
//         }
//         setQuestions(questions);
//         setStartedAt(Date.now());
//         // Navigate to GameScreen after questions are ready
//         navigate("/game", { replace: true });
//       } catch (err) {
//         console.error(err);
//         setError("Failed to fetch questions. Try again.");
//       } finally {
//         setLoading(false);
//       }
//     }

//     load();
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, []);

//   if (loading) return <div style={{ padding: 20 }}>Loading questions...</div>;
//   if (error) return <div style={{ padding: 20, color: "red" }}>{error}</div>;
//   return null; // should never be shown because navigate() occurs on success
// }
