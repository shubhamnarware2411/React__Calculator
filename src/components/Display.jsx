import style from "./Display.module.css";
function Display({ displayValue }) {
  return (
    <>
      <input
        className={style.display}
        type="text"
        value={displayValue}
        readOnly
      ></input>
    </>
  );
}
export default Display;
