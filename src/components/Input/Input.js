import {
  Container,
  Grid,
  Button,
  TextField,
  makeStyles,
} from "@material-ui/core";
import { Autocomplete } from "@material-ui/lab";
import SendIcon from "@material-ui/icons/Send";
import { useState } from "react";
import { InputGenerator } from "./InputGenerator";
import curlconvert from "../../scripts/curconvertArg";
import { toast } from "react-toastify";
import ButtonAppBar from "../Navbar/Navbar";
import { Switch, Route } from "react-router-dom";
import { ViewRequest } from "../ViewRequest/ViewRequest";
import { NoMatch } from "../ViewRequest/NoMatch";
import CopyBtn from "../Buttons/CopyBtn";
import examplecurl from "./exampleCurl";

const useStyles = makeStyles(() => ({
  dropdown: {
    width: "12rem",
  },
}));

export const CurlInput = (props) => {
  const options = Object.keys(curlconvert);
  const classes = useStyles();
  const [state, setState] = useState({
    curl: examplecurl,
    result: "",
    convertTo: "nodefetch",
  });
  const [syntaxError, setSyntaxError] = useState(false);
  const [selectEmpty, setSelectEmpty] = useState(false);
  const textSettings = {
    readOnly: true,
    label: `${curlconvert[state.convertTo].title} Syntax`,
    value: state.result,
    onChange: (e) => {
      setState((prevState) => ({ ...prevState, curl: e.target.value }));
    },
  };
  
  const convert = () => {
    if (!state.convertTo) {
      setSelectEmpty(true);
      return;
    } else setSelectEmpty(false);
    if (!state.curl) {
      setState((prevState) => ({ ...prevState, curl: examplecurl }));
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
        <Switch>
          <Route exact path="/">
            <Grid container spacing={4} justify="center">
              <Grid container item spacing={2}>
                <InputGenerator
                  inputProps={{
                    value: state.curl,
                    onChange: handleInputChange,
                    label: "cURL Syntax",
                    error: syntaxError,
                    placeholder: "Leave this empty to use a sample cURL request"
                  }}
                  Btns={[dropDown, ConvertBtn]}
                />
                <InputGenerator
                  inputProps={{ ...textSettings, disabled: !state.result }}
                  Btns={[<CopyBtn copyText={state.result} />]}
                />
              </Grid>
            </Grid>
          </Route>
          <Route
            path="/:id([a-z]{3}-[a-z]{3}-[a-z]{3})"
            render={({ match }) => (
              <div>
                <ViewRequest id={match.params.id} />
              </div>
            )}
          />
          <Route path="*">
            <NoMatch />
          </Route>
        </Switch>
      </Container>
    </div>
  );
};
