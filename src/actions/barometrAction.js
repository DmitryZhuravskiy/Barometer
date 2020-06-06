export const MORE_VALUE_RED = "MORE_VALUE_RED";
export const LESS_VALUE_RED = "LESS_VALUE_RED";
export const ZERO_VALUE_RED = "ZERO_VALUE_RED";
export const GET_VALUE_RED = "GET_VALUE_RED";
export const MORE_VALUE_GREEN = "MORE_VALUE_GREEN";
export const LESS_VALUE_GREEN = "LESS_VALUE_GREEN";
export const ZERO_VALUE_GREEN = "ZERO_VALUE_GREEN";
export const GET_VALUE_GREEN = "GET_VALUE_GREEN";
export const MORE_VALUE_BLUE = "MORE_VALUE_BLUE";
export const LESS_VALUE_BLUE = "LESS_VALUE_BLUE";
export const ZERO_VALUE_BLUE = "ZERO_VALUE_BLUE";
export const GET_VALUE_BLUE = "GET_VALUE_BLUE";
export const GET_VALUE_ALL = "GET_VALUE_ALL";

export const doMoreValueRed = function() {
  return {
    type: MORE_VALUE_RED,
    height: 10
  };
};

export const doLessValueRed = function() {
  return {
    type: LESS_VALUE_RED,
    height: 10
  };
};

export const clearValueRed = function() {
  return {
    type: ZERO_VALUE_RED,
    height: " "
  };
};

export const getValueRed = function() {
  return {
    type: GET_VALUE_RED,
    height: " "
  };
};

export const doMoreValueGreen = function() {
  return {
    type: MORE_VALUE_GREEN,
    height: 10
  };
};

export const doLessValueGreen = function() {
  return {
    type: LESS_VALUE_GREEN,
    height: 10
  };
};

export const clearValueGreen = function() {
  return {
    type: ZERO_VALUE_GREEN,
    height: " "
  };
};

export const getValueGreen = function() {
  return {
    type: GET_VALUE_GREEN,
    height: " "
  };
};

export const doMoreValueBlue = function() {
  return {
    type: MORE_VALUE_BLUE,
    height: 10
  };
};

export const doLessValueBlue = function() {
  return {
    type: LESS_VALUE_BLUE,
    height: 10
  };
};

export const clearValueBlue = function() {
  return {
    type: ZERO_VALUE_BLUE,
    height: " "
  };
};

export const getValueBlue = function() {
  return {
    type: GET_VALUE_BLUE,
    height: " "
  };
};

export const getValueAll = function() {
  return {
    type: GET_VALUE_ALL,
    height: " "
  };
};