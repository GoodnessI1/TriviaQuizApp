// src/utils/utils.js
export async function fetchQuestions({ amount, category, difficulty, type }) {
    
  const baseURL = "https://opentdb.com/api.php";
  const params = new URLSearchParams({
    amount,
    category,
    difficulty,
    type,
  });
  const url = `${baseURL}?${params.toString()}`;

  const response = await fetch(url);
  const data = await response.json();

  // Transform API data to a consistent format
  const formatted = data.results.map((q) => {
    const allOptions =
      q.type === "boolean"
        ? ["True", "False"]
        : [...q.incorrect_answers, q.correct_answer];

    // Shuffle options
    const shuffled = allOptions
      .map((value) => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map((opt, idx) => ({
        letter: String.fromCharCode(65 + idx),
        value: opt.value,
        isCorrect: opt.value === q.correct_answer,
      }));

    return {
      question: q.question,
      options: shuffled,
    };
  });

  return formatted;
}
