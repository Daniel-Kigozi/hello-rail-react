import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./components/app";
import store from "./redux/store";

function Index() {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}
ReactDOM.render(<Index />, document.getElementById("root"));
