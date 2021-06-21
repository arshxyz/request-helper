import {
  Container,
  Grid,
  Button,
  TextField,
  makeStyles,
} from "@material-ui/core";
import { Autocomplete } from "@material-ui/lab";
import SendIcon from "@material-ui/icons/Send";
import CopyIcon from "@material-ui/icons/FileCopy";
import { useState } from "react";
import { InputGenerator } from "./InputGenerator";
import curlconvert from "../../scripts/curconvertArg";
import { toast } from "react-toastify";
import ButtonAppBar from "../Navbar/Navbar";

const useStyles = makeStyles((theme) => ({
  dropdown: {
    width: "12rem",
  },
}));

export const CurlInput = (props) => {
  const options = Object.keys(curlconvert);
  const classes = useStyles();
  const [state, setState] = useState({
    curl: "",
    result: "",
    convertTo: "nodefetch",
  });
  const [syntaxError, setSyntaxError] = useState(false);
  const [selectEmpty, setSelectEmpty] = useState(false);

  const convert = () => {
    if (!state.convertTo) {
      setSelectEmpty(true);
      return;
    } else setSelectEmpty(false);
    if (!state.curl) {
      setSyntaxError(true);
      return;
    } else setSyntaxError(false);
    try {
      let x = curlconvert[state.convertTo].method(state.curl);
      setState((prevState) => ({ ...prevState, result: x }));
      setSyntaxError(false);
    } catch (error) {
      toast.error("Invalid cURL input");
      setSyntaxError(true);
    }
  };

  const handleInputChange = (e) => {
    setState((prevState) => ({
      ...prevState,
      curl: e.target.value,
    }));
  };

  const handleDropdownChange = (e, value) => {
    setState((prevState) => ({ ...prevState, convertTo: value }));
  };

  const textSettings = {
    readOnly: true,
    label: `${curlconvert[state.convertTo].title} Syntax`,
    value: state.result,
    onChange: (e) => {
      setState((prevState) => ({ ...prevState, curl: e.target.value }));
    },
  };
  const CopyBtn = (
    <Button
      variant="contained"
      color="primary"
      endIcon={<CopyIcon />}
      disabled={!state.result}
      onClick={() => {
        navigator.clipboard.writeText(state.result);
      }}
    >
      Copy
    </Button>
  );
  const ConvertBtn = (
    <Button
      variant="contained"
      color="primary"
      endIcon={<SendIcon />}
      onClick={convert}
    >
      Convert
    </Button>
  );

  const dropDown = (
    <Autocomplete
      disableClearable
      value={state.convertTo}
      autoHighlight
      onChange={handleDropdownChange}
      className={classes.dropdown}
      options={options}
      getOptionLabel={(option) => curlconvert[option].title}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Convert to"
          variant="outlined"
          size="small"
          fullWidth
          error={selectEmpty}
        />
      )}
    />
  );

  return (
    <div>
      <ButtonAppBar curlState={state} />
      <Container>
        <Grid container spacing={4} justify="center">
          <Grid container item spacing={2}>
            <InputGenerator
              inputProps={{
                value: state.curl,
                onChange: handleInputChange,
                label: "cURL Syntax",
                error: syntaxError,
              }}
              Btns={[dropDown, ConvertBtn]}
            />
            <InputGenerator
              inputProps={{ ...textSettings, disabled: !state.result }}
              Btns={[CopyBtn]}
            />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};
