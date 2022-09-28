const initialState = {
  num: "",
  num2: "",
  answ: "",
  sign: ""
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "BTN_1":
      if (state.sign) {
        return {
          ...state,
          num2:
            `${state.num2}${action.payload}`.length <= 10
              ? `${state.num2}${action.payload}`
              : `${state.num2}${action.payload}`.substring(0, 10)
        };
      } else {
        return {
          ...state,
          num:
            `${state.num}${action.payload}`.length <= 10
              ? `${state.num}${action.payload}`
              : `${state.num}${action.payload}`.substring(0, 10)
        };
      }
    case "BTN_2":
      if (state.sign) {
        return {
          ...state,
          num2:
            `${state.num2}${action.payload}`.length <= 10
              ? `${state.num2}${action.payload}`
              : `${state.num2}${action.payload}`.substring(0, 10)
        };
      } else {
        return {
          ...state,
          num:
            `${state.num}${action.payload}`.length <= 10
              ? `${state.num}${action.payload}`
              : `${state.num}${action.payload}`.substring(0, 10)
        };
      }
    case "BTN_3":
      if (state.sign) {
        return {
          ...state,
          num2:
            `${state.num2}${action.payload}`.length <= 10
              ? `${state.num2}${action.payload}`
              : `${state.num2}${action.payload}`.substring(0, 10)
        };
      } else {
        return {
          ...state,
          num:
            `${state.num}${action.payload}`.length <= 10
              ? `${state.num}${action.payload}`
              : `${state.num}${action.payload}`.substring(0, 10)
        };
      }
    case "BTN_4":
      if (state.sign) {
        return {
          ...state,
          num2:
            `${state.num2}${action.payload}`.length <= 10
              ? `${state.num2}${action.payload}`
              : `${state.num2}${action.payload}`.substring(0, 10)
        };
      } else {
        return {
          ...state,
          num:
            `${state.num}${action.payload}`.length <= 10
              ? `${state.num}${action.payload}`
              : `${state.num}${action.payload}`.substring(0, 10)
        };
      }
    case "BTN_5":
      if (state.sign) {
        return {
          ...state,
          num2:
            `${state.num2}${action.payload}`.length <= 10
              ? `${state.num2}${action.payload}`
              : `${state.num2}${action.payload}`.substring(0, 10)
        };
      } else {
        return {
          ...state,
          num:
            `${state.num}${action.payload}`.length <= 10
              ? `${state.num}${action.payload}`
              : `${state.num}${action.payload}`.substring(0, 10)
        };
      }
    case "BTN_6":
      if (state.sign) {
        return {
          ...state,
          num2:
            `${state.num2}${action.payload}`.length <= 10
              ? `${state.num2}${action.payload}`
              : `${state.num2}${action.payload}`.substring(0, 10)
        };
      } else {
        return {
          ...state,
          num:
            `${state.num}${action.payload}`.length <= 10
              ? `${state.num}${action.payload}`
              : `${state.num}${action.payload}`.substring(0, 10)
        };
      }
    case "BTN_7":
      if (state.sign) {
        return {
          ...state,
          num2:
            `${state.num2}${action.payload}`.length <= 10
              ? `${state.num2}${action.payload}`
              : `${state.num2}${action.payload}`.substring(0, 10)
        };
      } else {
        return {
          ...state,
          num:
            `${state.num}${action.payload}`.length <= 10
              ? `${state.num}${action.payload}`
              : `${state.num}${action.payload}`.substring(0, 10)
        };
      }
    case "BTN_8":
      if (state.sign) {
        return {
          ...state,
          num2:
            `${state.num2}${action.payload}`.length <= 10
              ? `${state.num2}${action.payload}`
              : `${state.num2}${action.payload}`.substring(0, 10)
        };
      } else {
        return {
          ...state,
          num:
            `${state.num}${action.payload}`.length <= 10
              ? `${state.num}${action.payload}`
              : `${state.num}${action.payload}`.substring(0, 10)
        };
      }
    case "BTN_9":
      if (state.sign) {
        return {
          ...state,
          num2:
            `${state.num2}${action.payload}`.length <= 10
              ? `${state.num2}${action.payload}`
              : `${state.num2}${action.payload}`.substring(0, 10)
        };
      } else {
        return {
          ...state,
          num:
            `${state.num}${action.payload}`.length <= 10
              ? `${state.num}${action.payload}`
              : `${state.num}${action.payload}`.substring(0, 10)
        };
      }
    case "BTN_0":
      if (state.sign) {
        return {
          ...state,
          num2:
            `${state.num2}${action.payload}`.length <= 10
              ? `${state.num2}${action.payload}`
              : `${state.num2}${action.payload}`.substring(0, 10)
        };
      } else {
        return {
          ...state,
          num:
            `${state.num}${action.payload}`.length <= 10
              ? `${state.num}${action.payload}`
              : `${state.num}${action.payload}`.substring(0, 10)
        };
      }
    case "FRACTION":
      return {
        ...state,
        num: !state.num2 ? `${state.num}${action.payload}` : `${state.num}`,
        num2: state.sign && `${state.num2}${action.payload}`
      };
    case "DECREMENT":
      return {
        ...state,
        sign: action.payload
      };
    case "INCREMENT":
      return {
        ...state,
        sign: action.payload
      };
    case "MULTI":
      return {
        ...state,
        sign: action.payload
      };
    case "DIV":
      return {
        ...state,
        sign: action.payload
      };
    case "CLEAN":
      return {
        ...state,
        num: "",
        num2: "",
        answ: "",
        sign: ""
      };
    case "NUMBER_SIGN":
      return {
        ...state,
        num:
          Number(state.num) > 0 ? `${+state.num * -1}` : `${+state.num * -1}`,
        num2:
          Number(state.num2) > 0
            ? `-${state.num2}`
            : `${state.num2}`.substring(1)
      };
    case "EQUALS":
      if (state.sign === "-") {
        return {
          ...state,
          answ:
            (Number.isInteger(+state.num) || Number.isInteger(+state.num2)) &&
            (state.num.length === 3 || state.num2.length === 3)
              ? (+state.num - +state.num2).toFixed(1)
              : +state.num - +state.num2,
          num: "",
          num2: "",
          sign: ""
        };
      }
      if (state.sign === "+") {
        return {
          ...state,
          answ: Number(state.num) + Number(state.num2),
          num: "",
          num2: "",
          sign: ""
        };
      }
      if (state.sign === "x") {
        return {
          ...state,
          answ: +state.num * +state.num2,
          num: "",
          num2: "",
          sign: ""
        };
      }
      if (state.sign === "/") {
        return {
          ...state,
          answ: +state.num / +state.num2,
          num: "",
          num2: "",
          sign: ""
        };
      } else {
        return state;
      }
    default:
      return state;
  }
};
