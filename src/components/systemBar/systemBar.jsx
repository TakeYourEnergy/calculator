import { Time } from "../time/time";
import style from "./systemBar.module.css";

export const SystemBar = () => {
  return (
    <div className={style.systemBar}>
      <Time />
    </div>
  );
};
