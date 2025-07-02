import React, {useState} from "react";
import styles from "../screens/home.module.css"

function Home() {
  const [form, setForm] = useState({
    amount: 10,
    category: "",
    difficulty: "",
    type: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className={styles.homeCon}>
      <h1 className={styles.pageTxt}>Game Parameters</h1>

      <div className={styles.gameParameterCon}>
        {" "}
        {/* To wrap both top and bottom container */}
        <div className={styles.bothHalf}>
          {" "}
          {/* Top half of the container */}
          <div>
            {" "}
            {/* First Item of the top half */}
            <p>Number Of Questions</p>
            <input
              type="number"
              name="amount"
              min="1"
              max="50"
              value={form.amount}
              onChange={handleChange}
            />
          </div>
          <div>
            {" "}
            {/* Second Item of the top half */}
            <p>Difficulty</p>
            <select
              name="difficulty"
              value={form.difficulty}
              onChange={handleChange}
            >
              <option value="">Any Difficulty</option>
              <option value="easy">Easy</option>
              <option value="medium">Medium</option>
              <option value="hard">Hard</option>
            </select>
          </div>
        </div>
        <div className={styles.bothHalf}>
          {" "}
          {/* Bottom half of the container */}
          <div>
            {" "}
            {/* First Item of the Bottom half */}
            <p>Category</p>
            <select
              name="category"
              value={form.category}
              onChange={handleChange}
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
          <div>
            {" "}
            {/* Second Item of the bottom half */}
            <p>Question Type</p>
            <div>
              <select name="type" value={form.type} onChange={handleChange}>
                <option value="">Any Type</option>
                <option value="multiple">Multiple Choice</option>
                <option value="boolean">True / False</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.startCon}>
        <button className={styles.start}>Start!!</button>
      </div>
    </div>
  );
}

export default Home;
