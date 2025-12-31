import React, { useState } from "react";
import styles from "../screens/home.module.css";
import { useNavigate } from "react-router-dom";
import { useQuiz } from "../components/QuizContext";

function Home() {
  const navigate = useNavigate();
  const { quizSettings, setQuizSettings } = useQuiz();

  // ✅ Rehydrate form from context
  const [form, setForm] = useState({
    amount: quizSettings?.amount ?? 10,
    category: quizSettings?.category ?? "",
    difficulty: quizSettings?.difficulty ?? "",
    type: quizSettings?.type ?? "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  function handleSubmit(e) {
    e.preventDefault();

    const settings = {
      amount: Number(form.amount),
      category: form.category || "",
      difficulty: form.difficulty || "",
      type: form.type || "",
    };

    setQuizSettings(settings);
    navigate("/loader");
  }

  return (
    <div className={styles.homeCon}>
      <h1 className={styles.pageTxt}>Game Parameters</h1>

      <form onSubmit={handleSubmit}>
        <div className={styles.gameParameterCon}>
          {/* TOP */}
          <div className={styles.bothHalf}>
            <div className={styles.param}>
              <label className={styles.label}>Number Of Questions</label>
              <input
                type="number"
                name="amount"
                min="1"
                max="50"
                value={form.amount}
                onChange={handleChange}
                className={styles.inputBox}
              />
            </div>

            <div className={styles.param}>
              <label className={styles.label}>Difficulty</label>
              <select
                name="difficulty"
                value={form.difficulty}
                onChange={handleChange}
                className={styles.inputBox}
              >
                <option value="">Any Difficulty</option>
                <option value="easy">Easy</option>
                <option value="medium">Medium</option>
                <option value="hard">Hard</option>
              </select>
            </div>
          </div>

          {/* BOTTOM */}
          <div className={styles.bothHalf}>
            <div className={styles.param}>
              <label className={styles.label}>Category</label>
              <select
                name="category"
                value={form.category}
                onChange={handleChange}
                className={styles.inputBox}
              >
                <option value="">Any Category</option>
                <option value="9">General Knowledge</option>
                <option value="10">Entertainment: Books</option>
                <option value="11">Entertainment: Film</option>
                <option value="12">Entertainment: Music</option>
                <option value="13">Musicals & Theatres</option>
                <option value="14">Television</option>
                <option value="15">Video Games</option>
                <option value="16">Board Games</option>
                <option value="17">Science & Nature</option>
                <option value="18">Computers</option>
                <option value="19">Mathematics</option>
                <option value="20">Mythology</option>
                <option value="21">Sports</option>
                <option value="22">Geography</option>
                <option value="23">History</option>
                <option value="24">Politics</option>
                <option value="25">Art</option>
                <option value="26">Celebrities</option>
                <option value="27">Animals</option>
                <option value="28">Vehicles</option>
                <option value="29">Comics</option>
                <option value="30">Gadgets</option>
                <option value="31">Japanese Anime & Manga</option>
                <option value="32">Cartoon & Animations</option>
              </select>
            </div>

            <div className={styles.param}>
              <label className={styles.label}>Question Type</label>
              <select
                name="type"
                value={form.type}
                onChange={handleChange}
                className={styles.inputBox}
              >
                <option value="">Any Type</option>
                <option value="multiple">Multiple Choice</option>
                <option value="boolean">True / False</option>
              </select>
            </div>
          </div>
        </div>

        <div className={styles.startCon}>
          <button className={styles.start} type="submit">
            Start!!
          </button>
        </div>
      </form>
    </div>
  );
}

export default Home;

// import React, { useState } from "react";
// import styles from "../screens/home.module.css";
// import { useNavigate } from "react-router-dom";
// import { useQuiz } from "../components/QuizContext";

// function Home() {
//   const [form, setForm] = useState({
//     amount: 10,
//     category: "",
//     difficulty: "",
//     type: "",
//   });

//   const navigate = useNavigate();

//   const { setQuizSettings } = useQuiz();

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setForm((prev) => ({ ...prev, [name]: value }));
//   };

//   function handleSubmit(e) {
//     e.preventDefault();
//     navigate("/loader", { state: { params: form } });
//     // navigate("/game");
//   }

//   function handleSubmit(e) {
//     e.preventDefault();

//     setQuizSettings({
//       amount: form.amount,
//       category: form.category || "Any",
//       difficulty: form.difficulty || "Any",
//       type: form.type || "Any",
//     });

//     navigate("/loader");
//   }

//   return (
//     <div className={styles.homeCon}>
//       <h1 className={styles.pageTxt}>Game Parameters</h1>

//       <form action="" onSubmit={handleSubmit}>
//         <div className={styles.gameParameterCon}>
//           {" "}
//           {/* To wrap both top and bottom container */}
//           <div className={styles.bothHalf}>
//             {" "}
//             {/* Top half of the container */}
//             {/*  */}
//             {/*  */}
//             <div className={styles.param}>
//               {" "}
//               {/* First Item of the top half */}
//               <label className={styles.label} htmlFor="">
//                 Number Of Questions
//               </label>
//               <div>
//                 <input
//                   type="number"
//                   name="amount"
//                   min="1"
//                   max="50"
//                   value={form.amount}
//                   onChange={handleChange}
//                   className={styles.inputBox}
//                 />
//               </div>
//             </div>
//             {/*  */}
//             <div className={styles.param}>
//               {" "}
//               {/* Second Item of the top half */}
//               <label className={styles.label}>Difficulty</label>
//               <div>
//                 <select
//                   name="difficulty"
//                   value={form.difficulty}
//                   onChange={handleChange}
//                   className={styles.inputBox}
//                   required
//                 >
//                   <option value="">Any Difficulty</option>
//                   <option value="easy">Easy</option>
//                   <option value="medium">Medium</option>
//                   <option value="hard">Hard</option>
//                 </select>
//               </div>
//             </div>
//             {/*  */}
//           </div>
//           <div className={styles.bothHalf}>
//             {" "}
//             {/* Bottom half of the container */}
//             <div className={styles.param}>
//               {" "}
//               {/* First Item of the Bottom half */}
//               <label className={styles.label}>Category</label>
//               <div>
//                 <select
//                   name="category"
//                   value={form.category}
//                   onChange={handleChange}
//                   className={styles.inputBox}
//                   required
//                 >
//                   <option value="">Any Category</option>
//                   <option value="9">General Knowledge</option>
//                   <option value="10">Entertainment: Books</option>
//                   <option value="11">Entertainment: Film</option>
//                   <option value="12">Entertainment: Music</option>
//                   <option value="13">Musicals & Theatres</option>
//                   <option value="14">Television</option>
//                   <option value="15">Video Games</option>
//                   <option value="16">Board Games</option>
//                   <option value="17">Science & Nature</option>
//                   <option value="18">Computers</option>
//                   <option value="19">Mathematics</option>
//                   <option value="20">Mythology</option>
//                   <option value="21">Sports</option>
//                   <option value="22">Geography</option>
//                   <option value="23">History</option>
//                   <option value="24">Politics</option>
//                   <option value="25">Art</option>
//                   <option value="26">Celebrities</option>
//                   <option value="27">Animals</option>
//                   <option value="28">Vehicles</option>
//                   <option value="29">Comics</option>
//                   <option value="30">Gadgets</option>
//                   <option value="31">Japanese Anime & Manga</option>
//                   <option value="32">Cartoon & Animations</option>
//                 </select>
//               </div>
//             </div>
//             {/*  */}
//             <div className={styles.param}>
//               {" "}
//               {/* Second Item of the bottom half */}
//               <label className={styles.label}>Question Type</label>
//               <div>
//                 <select
//                   className={styles.inputBox}
//                   name="type"
//                   value={form.type}
//                   onChange={handleChange}
//                   required
//                 >
//                   <option value="">Any Type</option>
//                   <option value="multiple">Multiple Choice</option>
//                   <option value="boolean">True / False</option>
//                 </select>
//               </div>
//             </div>
//             {/*  */}
//           </div>
//         </div>
//         <div className={styles.startCon}>
//           <button className={styles.start} type="submit">
//             Start!!
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// }

// export default Home;
