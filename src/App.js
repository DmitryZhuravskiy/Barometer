import React from "react";
import "./App.css";
import { createStore } from "redux";
import barometrReducer from "./reducers/barometrReducer";
import { Provider } from "react-redux";
import BarometrRedContainer from "./components/BarometrRedContainer";
import BarometrGreenContainer from "./components/BarometrGreenContainer";
import BarometrBlueContainer from "./components/BarometrBlueContainer";
import TogetherContainer from "./components/TogetherContainer";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <div className="threeContainers">
          <BarometrRedContainer color={"red"} />
          <BarometrGreenContainer color={"green"} />
          <BarometrBlueContainer color={"blue"} />
        </div>
        <TogetherContainer />
      </div>
    </Provider>
  );
}

export const store = createStore(barometrReducer);
export default App;
