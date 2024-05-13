// Buttons.js
import style from "./Buttons.module.css";

let btns = [
  "C",
  "(",
  ")",
  "√",
  "7",
  "8",
  "9",
  "/",
  "4",
  "5",
  "6",
  "*",
  "1",
  "2",
  "3",
  "-",
  "0",
  ".",
  "=",
  "+",
];

function Buttons({ onButtonclick }) {
  return (
    <div className={style.buttonsContainer}>
      {btns.map((buttonName) => (
        <button
          key={buttonName}
          className={style.button}
          onClick={() => {
            onButtonclick(buttonName);
          }}
        >
          {buttonName}
        </button>
      ))}
    </div>
  );
}

export default Buttons;
