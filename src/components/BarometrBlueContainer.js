import React from "react";
import { connect } from "react-redux";
import {
  doMoreValueBlue,
  doLessValueBlue,
  clearValueBlue,
  getValueBlue
} from "../actions/barometrAction";

function BarometrBlueContainer(props) {
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
          onClick={props.doMoreValueBlue}
          color={props.color}
        >
          Больше
        </button>
        <button
          className="barometrButton barometrButtonLess"
          onClick={props.doLessValueBlue}
          color={props.color}
        >
          Меньше
        </button>
        <button
          className="barometrButton barometrButtonZero"
          onClick={props.clearValueBlue}
          color={props.color}
        >
          Вылить
        </button>
        <button
          className="barometrButton barometrButtonGet"
          onClick={props.getValueBlue}
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
    height: state.blue.height
  };
};

const mapDispatchToProps = dispatch => {
  return {
    doMoreValueBlue: () => dispatch(doMoreValueBlue()),
    doLessValueBlue: () => dispatch(doLessValueBlue()),
    clearValueBlue: () => dispatch(clearValueBlue()),
    getValueBlue: () => dispatch(getValueBlue())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BarometrBlueContainer);
