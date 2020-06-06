import {
  MORE_VALUE_RED, LESS_VALUE_RED, ZERO_VALUE_RED, GET_VALUE_RED,
  MORE_VALUE_GREEN, LESS_VALUE_GREEN, ZERO_VALUE_GREEN, GET_VALUE_GREEN,
  MORE_VALUE_BLUE, LESS_VALUE_BLUE, ZERO_VALUE_BLUE, GET_VALUE_BLUE, GET_VALUE_ALL
} from "../actions/barometrAction";

const initialState = {
  height: 20,
  color: "yellow",
  red: {
    height: 10
  },
  green: {
    height: 20
  },
  blue: {
    height: 10
  },
  container: {
    red: 0,
    green: 0,
    blue: 0
  }
}

const barometrReducer = (state = initialState, action) => {
  console.log([state.container.red, state.container.green, state.container.blue]);
  switch (action.type) {
    case MORE_VALUE_RED:
      return {
        ...state,
        red: {
          height: state.red.height + action.height
        }
      };

    case LESS_VALUE_RED:
      return {
        ...state,
        red: {
          height: state.red.height - action.height
        }
      };

    case ZERO_VALUE_RED:
      return {
        ...state,
        red: {
          height: 0
        }
      };

    case GET_VALUE_RED:
      return {
        ...state,
        container: {
          red: state.container.red + state.red.height,
          green: state.container.green,
          blue: state.container.blue,
        },
        red: {
          height: 0
        }
      };

    case MORE_VALUE_GREEN:
      return {
        ...state,
        green: {
          height: state.green.height + action.height
        }
      };

    case LESS_VALUE_GREEN:
      return {
        ...state,
        green: {
          height: state.green.height - action.height
        }
      };

    case ZERO_VALUE_GREEN:
      return {
        ...state,
        green: {
          height: 0
        }
      };

    case GET_VALUE_GREEN:
      return {
        ...state,
        container: {
          red: state.container.red,
          green: state.container.green + state.green.height,
          blue: state.container.blue,
        },
        green: {
          height: 0
        }
      };

    case MORE_VALUE_BLUE:
      return {
        ...state,
        blue: {
          height: state.blue.height + action.height
        }
      };

    case LESS_VALUE_BLUE:
      return {
        ...state,
        blue: {
          height: state.blue.height - action.height
        }
      };

    case ZERO_VALUE_BLUE:
      return {
        ...state,
        blue: {
          height: 0
        }
      };

    case GET_VALUE_BLUE:
      return {
        ...state,
        container: {
          red: state.container.red,
          green: state.container.green,
          blue: state.container.blue + state.blue.height
        },
        blue: {
          height: 0
        }
      };

    case GET_VALUE_ALL:
      return {
        ...state,
        container: {
          red: 0,
          green: 0,
          blue: 0
        },
        height: 0
      };

    default:
      return state;
  }
};

export default barometrReducer;
