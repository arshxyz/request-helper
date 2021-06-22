import { InputGenerator } from "../Input/InputGenerator";
import { Grid } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import { useEffect, useState } from "react";
import { db } from "../../firebase";
import convertTypes from "../../scripts/curconvertArg";
import { NoMatch } from "./NoMatch";
import CopyBtn from "../Buttons/CopyBtn";
import Loading from "./Loading";

export const ViewRequest = ({ id }) => {
  const [loading, setLoading] = useState(true);
  const [validId, setValidId] = useState(true);
  const [curlState, setCurlState] = useState({
    curl: "",
    result: "",
    convertTo: "",
  });
  const fetchRequest = async (id) => {
    const reqRef = db.collection("requests").doc(id);
    console.log(id);
    await reqRef.get().then((doc) => {
      if (!doc.exists) {
        console.log("doesnt exist");
        setValidId(false);
      } else {
        setCurlState(doc.data());
      }
      setLoading(false);
    });
  };
  useEffect(() => {
    fetchRequest(id);
  }, [id]);

  const textSettings = {
    readOnly: true,
    // label: `${curlconvert[state.convertTo].title} Syntax`,
    value: "state.result",
  };

  const RequestMatch = () => (
    <Grid container spacing={2}>
      <Grid item container justify="flex-start">
        <Typography variant="h5">Viewing {id}</Typography>
      </Grid>
      <InputGenerator
        inputProps={{
          ...textSettings,
          value: curlState.curl,
          label: "cURL Syntax",
        }}
        Btns={[<CopyBtn copyText={curlState.curl} />]}
      />
      <InputGenerator
        inputProps={{
          ...textSettings,
          value: curlState.result,
          label: `${convertTypes[curlState.convertTo].title} Syntax`,
        }}
        Btns={[<CopyBtn copyText={curlState.result} />]}
      />
    </Grid>
  );
  return (
    <div>
      {loading ? (
        <Loading />
      ) : validId ? (
        <RequestMatch />
      ) : (
        <NoMatch error="invalid" />
      )}
    </div>
  );
};
