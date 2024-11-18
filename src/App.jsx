import { Provider } from "react-redux";
import Router from "./pages";
import { store } from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
}

export default App;
