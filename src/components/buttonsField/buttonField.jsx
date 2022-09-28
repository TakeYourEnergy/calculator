import style from "./buttonField.module.css";
import { useDispatch } from "react-redux";
import {
  btn1,
  btn2,
  decrementAction,
  summAction,
  incrementAction,
  btn3,
  btn4,
  btn5,
  btn6,
  btn7,
  btn8,
  btn9,
  btn0,
  multiAction,
  divisionAction,
  cleanAction,
  fractionAction,
  numberSignAction
} from "../../redux/actions/actions";

export const ButtonField = () => {
  const dispatch = useDispatch();
  return (
    <div className={style.field}>
      <button
        onClick={() => dispatch(cleanAction())}
        style={{ color: "#343434", backgroundColor: "#FF5959" }}
        className={style.btn}
        value="c"
      >
        c
      </button>
      <button style={{ color: "#66FF7F" }} className={style.btn} value="%">
        %
      </button>
      <button
        onClick={() => dispatch(divisionAction("/"))}
        style={{ color: "#66FF7F" }}
        className={style.btn}
        value="&#247;"
      >
        &#247;
      </button>
      <button
        onClick={() => dispatch(numberSignAction())}
        style={{ color: "#66FF7F" }}
        className={style.btn}
        value="+/-"
      >
        +/-
      </button>
      <button
        onClick={(e) => dispatch(btn7(e.target.value))}
        className={style.btn}
        value="7"
      >
        7
      </button>
      <button
        onClick={(e) => dispatch(btn8(e.target.value))}
        className={style.btn}
        value="8"
      >
        8
      </button>
      <button
        onClick={(e) => dispatch(btn9(e.target.value))}
        className={style.btn}
        value="9"
      >
        9
      </button>
      <button
        onClick={() => dispatch(multiAction("x"))}
        style={{ color: "#66FF7F" }}
        className={style.btn}
        value="x"
      >
        x
      </button>
      <button
        onClick={(e) => dispatch(btn4(e.target.value))}
        className={style.btn}
        value="4"
      >
        4
      </button>
      <button
        onClick={(e) => dispatch(btn5(e.target.value))}
        className={style.btn}
        value="5"
      >
        5
      </button>
      <button
        onClick={(e) => dispatch(btn6(e.target.value))}
        className={style.btn}
        value="6"
      >
        6
      </button>
      <button
        onClick={(e) => dispatch(decrementAction(e.target.value))}
        style={{ color: "#66FF7F" }}
        className={style.btn}
        value="-"
      >
        -
      </button>
      <button
        onClick={(e) => dispatch(btn1(e.target.value))}
        className={style.btn}
        value="1"
      >
        1
      </button>
      <button
        onClick={(e) => dispatch(btn2(e.target.value))}
        className={style.btn}
        value="2"
      >
        2
      </button>
      <button
        onClick={(e) => dispatch(btn3(e.target.value))}
        className={style.btn}
        value="3"
      >
        3
      </button>
      <button
        onClick={() => dispatch(incrementAction("+"))}
        style={{ color: "#66FF7F" }}
        className={style.btn}
        value="+"
      >
        +
      </button>
      <button
        onClick={(e) => dispatch(btn0(e.target.value))}
        style={{ width: "160px", gridColumnStart: "1", gridColumnEnd: "3" }}
        className={style.btn}
        value="0"
      >
        0
      </button>
      <button
        onClick={() => dispatch(fractionAction("."))}
        className={style.btn}
        value="."
      >
        .
      </button>
      <button
        style={{ color: "#343434", backgroundColor: "#66FF7F" }}
        className={style.btn}
        value="="
        onClick={() => dispatch(summAction())}
      >
        =
      </button>
    </div>
  );
};
