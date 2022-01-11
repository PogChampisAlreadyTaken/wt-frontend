import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Slider,
  TextField,
  Typography,
} from "@mui/material";

import { Button } from "@material-ui/core";
import * as React from "react";
import { Coin, setUserHelper } from "../../model";
import { postTransaction } from "../../request/gameService";
import { makeStyles } from "@material-ui/core/styles";
import { UserContext } from "../../context/userContext";

interface Props {
  onClose: (open: boolean) => void;
  open: boolean;
  coin: Coin | undefined;
}

export default function CoinSellDialog(props: Props) {
  const { onClose, open, coin } = props;
  const [amount, setAmount] = React.useState<number>(0.0);
  const [userContext, setUserContext] = React.useContext(UserContext);
  const classes = useStyles();

  if (coin === undefined) {
    return null;
  }
  const handleClose = () => {
    onClose(!open);
  };
  const handleSell = () => {
    const isDollar = coin._id === "usd";
    if (!isDollar) {
      postTransaction(
        {
          name: coin._id,
          amount: amount,
          activity: "sell",
          price: coin.market_data.current_price,
          date: Date.now(),
        },
        userContext?._id ?? "0"
      ).then((user) => {
        if (user !== null) {
          setUserContext(setUserHelper(user));
        }
      });
    }
  };

  const handleSellAll = () => {
    const fullAmount = userContext?.gameStats.portfolio.get(coin._id)?.amount;
    const isDollar = coin._id === "usd";

    if (fullAmount !== undefined && !isDollar) {
      postTransaction(
        {
          name: coin._id,
          amount: fullAmount,
          activity: "sell",
          price: coin.market_data.current_price,
          date: Date.now(),
        },
        userContext?._id ?? "0"
      ).then((user) => {
        if (user !== null) {
          setUserContext(setUserHelper(user));
        }
      });
    }
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle
        style={{
          background: "#005249",
          color: "#fff",
          fontWeight: "bold",
        }}
      >
        Sell {coin.name}
      </DialogTitle>
      <DialogContent style={{ padding: 50 }}>
        <Slider
          style={{
            color: "#005249",
          }}
          value={typeof amount === "number" ? amount : 0}
          min={0}
          onChange={(event: any) => {
            setAmount(event.target.value);
          }}
          max={userContext?.gameStats.portfolio.get(coin._id)?.amount}
          aria-label="Default"
          valueLabelDisplay="auto"
          step={0.01}
        />

        <div style={{ display: "flex", flexDirection: "row" }}>
          <Typography
            style={{
              margin: "auto",
              marginRight: "20px",
            }}
          >
            USD
          </Typography>
          <TextField
            className={classes.overrides}
            id="outlined-Coin"
            label="USD"
            fullWidth
            type="number"
            onChange={(event: any) => {
              setAmount(event.target.value);
            }}
            value={amount * coin.market_data.current_price}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </div>
      </DialogContent>
      <DialogActions>
        <Button
          onClick={handleClose}
          variant="contained"
          style={{
            padding: 10,
            background: "#005249",
            color: "#fff",
          }}
        >
          Cancel
        </Button>
        <Button
          onClick={() => {
            handleSell();
            handleClose();
          }}
          variant="contained"
          style={{
            padding: 10,
            background: "#b10101",
            color: "#fff",
          }}
        >
          Sell
        </Button>
        <Button
          onClick={() => {
            handleSellAll();
            handleClose();
          }}
          variant="contained"
          style={{
            padding: 10,
            background: "#005249",
            color: "#fff",
          }}
        >
          Sell All
        </Button>
      </DialogActions>
    </Dialog>
  );
}

const useStyles = makeStyles({
  overrides: {
    "& label.Mui-focused": { color: "green" },
    "& .MuiOutlinedInput-root": {
      "&.Mui-focused fieldset": { borderColor: "green" },
    },
  },
});
