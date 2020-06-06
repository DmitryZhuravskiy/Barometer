import React from "react";
import { connect } from "react-redux";
import { doMoreValue, doLessValue, clearValue, getValue } from "../actions/barometrAction";

function BarometrContainer(props) {
  var ourColor = props.color;
  return (
    <div className="example">
      <article className="barometr">
        <div className="barometrWater" style={{ height: props.height, background: props.color }}>
          <p>{props.height}</p>
        </div>
      </article>
      <div className="barometrButtons">
        <button className="barometrButton barometrButtonMore" onClick={props.doMoreValue()} color={props.color}>ÐÐ¾Ð±Ð¾Ð»ÑÑÐµ</button>
        <button className="barometrButton barometrButtonLess" onClick={props.doLessValue()} color={props.color}>ÐÐ¾Ð¼ÐµÐ½ÑÑÐµ</button>
        <button className="barometrButton barometrButtonZero" onClick={props.clearValue()} color={props.color}>ÐÐ±Ð½ÑÐ»Ð¸ÑÑ</button>
        <button className="barometrButton barometrButtonGet" onClick={props.getValue()} color={props.color}>ÐÑÐ»Ð¸ÑÑ</button>
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    height: state.ourColor.height
  };
};

const mapDispatchToProps = dispatch => {
  return {
    doMoreValue: () => dispatch(doMoreValue()),
    doLessValue: () => dispatch(doLessValue()),
    clearValue: () => dispatch(clearValue()),
    getValue: () => dispatch(getValue())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BarometrContainer);
