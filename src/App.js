import logo from "./logo.svg";
import "./App.css";
import store from "./store";
import { Provider } from "react-redux";
import Home from "./screens/Home";
import MoreInfo from "./screens/MoreInfo";

function App() {
  return (
    <Provider store={store}>
      <div>
        <Home />
        <MoreInfo />
      </div>
    </Provider>
  );
}

export default App;
