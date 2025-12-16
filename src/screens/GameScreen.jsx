import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useQuiz } from "../components/QuizContext";
import Option from "../components/Option";
import styles from "./gamescreen.module.css";

function GameScreen() {
  const { questions, userAnswers, setUserAnswers } = useQuiz();
  const [index, setIndex] = useState(0);
  const navigate = useNavigate();

  if (!questions || questions.length === 0) {
    navigate("/", { replace: true });
    return null;
  }

  const current = questions[index];
  // console.log(current);
  const userAnswer = userAnswers.find((a) => a.questionIndex === index);

  const selectOption = (opt) => {
    setUserAnswers((prev) => {
      const filtered = prev.filter((a) => a.questionIndex !== index);
      return [...filtered, { questionIndex: index, selected: opt }];
    });
  };

  const next = () => {
    if (index + 1 < questions.length) {
      setIndex((prev) => prev + 1);
    } else {
      navigate("/result");
    }
  };

  const prev = () => {
    if (index > 0) setIndex((prev) => prev - 1);
  };

  const skip = () => {
    if (index + 1 < questions.length) setIndex((prev) => prev + 1);
  };

  return (
    <div className={styles.game_screen}>
      <div className={styles.question}>
        <span className={styles.qNum}>Q{index + 1}</span>
        <p
          className={styles.qText}
          dangerouslySetInnerHTML={{ __html: current.question }}
        />
      </div>

      <div className={styles.options}>
        {current.options.map((opt) => (
          <Option
            key={opt.letter}
            letter={opt.letter}
            value={opt.value}
            selected={userAnswer && userAnswer.selected.value === opt.value}
            onSelect={() => selectOption(opt)}
          />
        ))}
      </div>

      <div className={styles.nav_and_pb}>
        <div className={styles.nav}>
          <button className={styles.queNav} onClick={prev}>
            Prev
          </button>
          <button className={styles.queNav} onClick={skip}>
            Skip
          </button>
          <button className={styles.queNav} onClick={next}>
            Next
          </button>
        </div>

        <div className={styles.progressbar}>
          {/* You can fill this later */}
        </div>
      </div>
    </div>
  );
}

export default GameScreen;

// Former Options....

// {
//   current.options.map((opt) => {
//     const selected = userAnswer && userAnswer.selected.value === opt.value;

//     return (
//       <div
//         key={opt.letter}
//         className={`${styles.optionA} ${selected ? styles.selected : ""}`}
//         onClick={() => selectOption(opt)}
//       >
//         <div className={styles.optLetter}>{opt.letter}</div>
//         <p
//           className={styles.optValue}
//           dangerouslySetInnerHTML={{ __html: opt.value }}
//         />
//       </div>
//     );
//   });
// }

// import React from "react";
// import styles from "./gamescreen.module.css";

// function GameScreen() {
//   return (
//     <div className={styles.game_screen}>
//       <div className={styles.question}>
//         <span className={styles.qNum}>Q1</span>
//         <p className={styles.qText}>
//           Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam,
//           delectus perferendis hic, ea deleniti distinctio obcaecati doloribus,
//           veritatis expedita possimus vitae eius a esse illo? Sequi repellendus
//           aliquid optio perspiciatis officia. Ipsa vitae odit inventore
//           provident cupiditate saepe, ex neque nihil expedita magni impedit
//           animi corporis facilis aspernatur veritatis in minus ipsum possimus
//           quae fuga rerum? Pariatur odio magni delectus, natus error omnis
//           laudantium ad sapiente praesentium perferendis, repellat inventore.
//           Placeat repellendus commodi sint distinctio necessitatibus nam illo
//           officiis animi.
//         </p>
//       </div>
//       <div className={styles.options}>
//         <div className={styles.optionA}>
//           <div className={styles.optLetter}>A</div>
//           <p className={styles.optValue}>
//             Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos,
//             eveniet.
//           </p>
//         </div>
//         <div className={styles.optionB}>
//           <div className={styles.optLetter}>B</div>
//           <p className={styles.optValue}>
//             Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos,
//             eveniet.
//           </p>
//         </div>
//         <div className={styles.optionC}>
//           <div className={styles.optLetter}>C</div>
//           <p className={styles.optValue}>
//             Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos,
//             eveniet.
//           </p>
//         </div>
//         <div className={styles.optionD}>
//           <div className={styles.optLetter}>D</div>
//           <p className={styles.optValue}>
//             Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos,
//             eveniet.
//           </p>
//         </div>
//       </div>
//       <div className={styles.nav_and_pb}>
//         <div className={styles.nav}>
//           <button className={styles.queNav}> Prev</button>
//           <button className={styles.queNav}>Skip </button>
//           <button className={styles.queNav}>Next </button>
//         </div>
//         <div className={styles.progressbar}></div>
//       </div>
//     </div>
//   );
// }

// export default GameScreen;

// function Option({ letter, value }) {
//   return (
//     <div className={styles.optionA}>
//       <div className={styles.optLetter}>{letter}</div>
//       <p className={styles.optValue}>
//         {value}
//       </p>
//     </div>
//   );
// }
