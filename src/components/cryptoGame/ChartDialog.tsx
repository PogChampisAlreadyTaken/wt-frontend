import {
    Dialog,
    DialogTitle,
  } from "@mui/material";
import { Coin } from "../../model";
import { DialogContent } from "@mui/material";

interface Props {
    onClose: (open: boolean) => void;
    open: boolean;
    coin: Coin | undefined;
  }

export default function ChartDialog(props: Props){
  const { onClose, open, coin } = props;

  if (coin === undefined) {
    return null;
  }

  const handleClose = () => {
    onClose(!open);
  };


  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>Set backup account</DialogTitle>
      <DialogContent>
          text 
      </DialogContent>
    </Dialog>
  );
}