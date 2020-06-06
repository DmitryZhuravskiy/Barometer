import React from "react";
import { connect } from "react-redux";
import { getValueAll } from "../actions/barometrAction";

function TogetherContainer(props) {
  return (
    <div className="allThreeColors">
      <div className="allInOne">
        <div
          className="threeCats"
          style={{ height: props.height, background: props.color }}
        >
          <p>{props.height}</p>
        </div>
      </div>
      <div>
        <button
          className="barometrButton barometrButtonGet"
          onClick={props.getValueAll}
          color={props.color}
        >
          Вылить
        </button>
        <p className="allThreeColors__color-description">
          Цвет жидкости - {props.color}
        </p>
        <p className="allThreeColors__height-description">
          Высота жидкости - {props.height}
        </p>
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    height: Math.ceil(
      (state.container.red + state.container.green + state.container.blue) / 3
    ),
    color:
      "rgb(" +
      state.container.red +
      "," +
      state.container.green +
      "," +
      state.container.blue +
      ")"
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getValueAll: () => dispatch(getValueAll())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TogetherContainer);
