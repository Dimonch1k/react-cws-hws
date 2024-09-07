import LangSelector from "./Lang-Selector.jsx";
import Ball from "./Ball.jsx";

import "../../styles/components/magicBall/Magic-Ball.scss";

import { answerList } from "./answerList.js";

const MagicBall = () => {
  return (
    <div className="magic-ball">
      <LangSelector />
      <Ball answerList={answerList} />
    </div>
  );
};

export default MagicBall;
