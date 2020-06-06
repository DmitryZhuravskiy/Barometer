import React from "react";
import { connect } from "react-redux";
import {
  doMoreValueGreen,
  doLessValueGreen,
  clearValueGreen,
  getValueGreen
} from "../actions/barometrAction";

function BarometrGreenContainer(props) {
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
          onClick={props.doMoreValueGreen}
          color={props.color}
        >
          Больше
        </button>
        <button
          className="barometrButton barometrButtonLess"
          onClick={props.doLessValueGreen}
          color={props.color}
        >
          Меньше
        </button>
        <button
          className="barometrButton barometrButtonZero"
          onClick={props.clearValueGreen}
          color={props.color}
        >
          Вылить
        </button>
        <button
          className="barometrButton barometrButtonGet"
          onClick={props.getValueGreen}
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
    height: state.green.height
  };
};

const mapDispatchToProps = dispatch => {
  return {
    doMoreValueGreen: () => dispatch(doMoreValueGreen()),
    doLessValueGreen: () => dispatch(doLessValueGreen()),
    clearValueGreen: () => dispatch(clearValueGreen()),
    getValueGreen: () => dispatch(getValueGreen())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BarometrGreenContainer);
