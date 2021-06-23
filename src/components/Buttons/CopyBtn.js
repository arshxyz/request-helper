import { Button } from "@material-ui/core";
import { toast } from "react-toastify";
import CopyIcon from "@material-ui/icons/FileCopy";

export default function CopyBtn({ copyText }) {
  return (
    <Button
      variant="contained"
      color="primary"
      endIcon={<CopyIcon />}
      onClick={() => {
        navigator.clipboard.writeText(copyText);
        toast.success("Copied!");
      }}
    >
      Copy
    </Button>
  );
}
