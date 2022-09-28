import style from "./time.module.css";

export const Time = () => {
  let now = new Date();
  let hours = now.getHours();
  let minutes = now.getMinutes();

  return (
    <div className={style.time}>
      {minutes > 9 ? `${hours}:${minutes}` : `${hours}:0${minutes}`}
    </div>
  );
};
