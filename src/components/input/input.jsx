import { useSelector } from "react-redux";
import style from "./input.module.css";

const crop = (number) => {
  let str = String(number);
  let arr = str.split("");
  let arrSlice = arr.slice(0, 11);
  return Number(arrSlice.join(""));
};

export const Input = () => {
  const calculatorButton = useSelector((state) => state.reducer);
  console.log(calculatorButton);

  const handleValue = () => {
    if (
      calculatorButton.num &&
      !calculatorButton.num2 &&
      !calculatorButton.sign
    ) {
      return calculatorButton.num;
    }
    if (
      calculatorButton.num &&
      calculatorButton.sign &&
      !calculatorButton.num2
    ) {
      return calculatorButton.num;
    }
    if (
      calculatorButton.num &&
      calculatorButton.sign &&
      calculatorButton.num2
    ) {
      return calculatorButton.num2;
    }
    if (
      !calculatorButton.num &&
      !calculatorButton.sign &&
      !calculatorButton.num2 &&
      calculatorButton.answ
    ) {
      return crop(calculatorButton.answ);
    } else {
      return 0;
    }
  };

  return (
    <div className={style.boxForInput}>
      <div className={style.input}>{handleValue()}</div>
    </div>
  );
};
