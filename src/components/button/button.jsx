import style from "./button.module.css";

export const Button = ({ number, bgColor, color }) => {
  const handleClick = (e) => {
    console.log(e.target.value);
  };
  return (
    <button
      style={{ backgroundColor: `${bgColor}`, color: color }}
      className={style.btn}
      onClick={handleClick}
      value={number}
    >
      {number}
    </button>
  );
};
