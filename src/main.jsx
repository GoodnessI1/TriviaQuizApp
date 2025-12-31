import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { QuizProvider } from "./components/QuizContext.jsx";

createRoot(document.getElementById("root")).render(
  <QuizProvider>
    <App />
  </QuizProvider>
);
