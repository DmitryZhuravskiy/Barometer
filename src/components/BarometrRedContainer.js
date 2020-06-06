import React from "react";
import { connect } from "react-redux";
import {
  doMoreValueRed,
  doLessValueRed,
  clearValueRed,
  getValueRed
} from "../actions/barometrAction";

function BarometrRedContainer(props) {
  return (
    <div className="example">
      <article className="barometr">
        <div
          className="barometrWater"
          style={{ height: props.height, background: props.color }}
        >
          <p>{props.height}</p>
        </div>
      </article>
      <div className="barometrButtons">
        <button
          className="barometrButton barometrButtonMore"
          onClick={props.doMoreValueRed}
          color={props.color}
        >
          Больше
        </button>
        <button
          className="barometrButton barometrButtonLess"
          onClick={props.doLessValueRed}
          color={props.color}
        >
          Меньше
        </button>
        <button
          className="barometrButton barometrButtonZero"
          onClick={props.clearValueRed}
          color={props.color}
        >
          Вылить
        </button>
        <button
          className="barometrButton barometrButtonGet"
          onClick={props.getValueRed}
          color={props.color}
        >
          Перелить
        </button>
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    height: state.red.height
  };
};

const mapDispatchToProps = dispatch => {
  return {
    doMoreValueRed: () => dispatch(doMoreValueRed()),
    doLessValueRed: () => dispatch(doLessValueRed()),
    clearValueRed: () => dispatch(clearValueRed()),
    getValueRed: () => dispatch(getValueRed())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BarometrRedContainer);
