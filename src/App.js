import { CssBaseline } from "@material-ui/core";
import { CurlInput } from "./components/Input/Input";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Flip } from "react-toastify";

function App() {
  return (
    <CssBaseline>
      <CurlInput />
      <ToastContainer
        limit={1}
        hideProgressBar
        pauseOnFocusLoss={false}
        autoClose={2000}
        transition={Flip}
        position={"bottom-center"}
      />
    </CssBaseline>
  );
}

export default App;
