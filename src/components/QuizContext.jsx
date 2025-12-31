import { createContext, useContext, useState } from "react";

const QuizContext = createContext();

export function QuizProvider({ children }) {
  const [questions, setQuestions] = useState([]);
  const [userAnswers, setUserAnswers] = useState([]);
  const [quizSettings, setQuizSettings] = useState(null);

  const resetQuiz = () => {
    setQuestions([]);
    setUserAnswers([]);
    setQuizSettings(null);
  };

  return (
    <QuizContext.Provider
      value={{
        questions,
        setQuestions,
        userAnswers,
        setUserAnswers,
        quizSettings,
        setQuizSettings,
        resetQuiz,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
}

export const useQuiz = () => useContext(QuizContext);

// import { createContext, useContext, useState } from "react";

// const QuizContext = createContext();

// export function QuizProvider({ children }) {
//   const [questions, setQuestions] = useState([]);
//   const [userAnswers, setUserAnswers] = useState([]);

//   // 👇 NEW: store ALL quiz parameters
//   const [quizSettings, setQuizSettings] = useState(null);

//   return (
//     <QuizContext.Provider
//       value={{
//         questions,
//         setQuestions,
//         userAnswers,
//         setUserAnswers,
//         quizSettings,
//         setQuizSettings,
//       }}
//     >
//       {children}
//     </QuizContext.Provider>
//   );
// }

// export const useQuiz = () => useContext(QuizContext);
