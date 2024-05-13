import { useState } from "react";
import style from "./App.module.css";
import Buttons from "./components/Buttons";
import Display from "./components/Display";
function App() {
  const [calval, setcalval] = useState([""]);
  const onButtonclick = (buttonName) => {
    if (buttonName == "C") {
      setcalval("");
    } else if (buttonName === "=") {
      try {
        setcalval(eval(calval).toString());
      } catch {
        setcalval("ERROR");
      }
    } else if (buttonName == "√") {
      setcalval(Math.sqrt(parseFloat(calval)).toString());
    } else {
      const newvalue = calval + buttonName;
      setcalval(newvalue);
    }
  };
  return (
    <>
      <center>
        <div className={style.calculator}>
          <Display displayValue={calval}></Display>
          <Buttons onButtonclick={onButtonclick}></Buttons>
        </div>
      </center>
    </>
  );
}

export default App;
