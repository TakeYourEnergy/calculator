import style from "./calculator.module.css";
import { SystemBar } from "../systemBar/systemBar";
import { Input } from "../input/input";
import { ButtonField } from "../buttonsField/buttonField";

export const Calculator = () => {
  return (
    <div className={style.calculator}>
      <SystemBar />
      <Input />
      <ButtonField />
    </div>
  );
};
