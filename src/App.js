import { CssBaseline } from "@material-ui/core";
import { CurlInput } from "./components/Input/Input";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Flip } from "react-toastify";
import ButtonAppBar from "./components/Navbar/Navbar";

function App() {
  return (
    <CssBaseline>
      <ButtonAppBar />
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
