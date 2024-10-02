import { useState } from "react";
import { useTranslation } from "react-i18next";

import "../../styles/components/magicBall/Ball.scss";

const Ball = () => {
  const [shakeBall, setShakeBall] = useState(false);
  const [showAnswer, setShowAnswer] = useState(false);
  const [answerIndex, setAnswerIndex] = useState(false);
  const { t } = useTranslation();
  const answers = t("answers");

  const getRandomAnswer = () => {
    setAnswerIndex(Math.floor(Math.random() * answers.length));
  };

  return (
    <div className={shakeBall ? "ball shake-ball" : "ball"}>
      <button
        className="answer-btn"
        id="answer-btn"
        onClick={() => {
          setShowAnswer(false);
          setShakeBall(true);
          setTimeout(() => {
            setShakeBall(false);
            getRandomAnswer();
            setShowAnswer(true);
          }, 1000);
        }}
      >
        <p className="answer-text">{showAnswer && answers[answerIndex]}</p>
      </button>
    </div>
  );
};

export default Ball;
