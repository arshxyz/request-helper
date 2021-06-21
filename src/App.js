import { CssBaseline } from "@material-ui/core";
import { CurlInput } from "./components/Input/Input";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Bounce } from "react-toastify";
import {BrowserRouter as Router} from "react-router-dom"

function App() {

  return (
    <Router>
    <CssBaseline>
      <CurlInput />
      <ToastContainer
        limit={1}
        hideProgressBar
        pauseOnFocusLoss={false}
        autoClose={2000}
        transition={Bounce}
        position={"bottom-center"}
      />
    </CssBaseline>
    </Router>
  );
}

export default App;
