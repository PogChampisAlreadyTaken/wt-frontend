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
import { Coin, emptyUser, setUserHelper } from "../../model";
import { postTransaction } from "../../request/gameService";
import { makeStyles } from "@material-ui/core/styles";
import { UserContext } from "../../context/userContext";

interface Props {
  onClose: (open: boolean) => void;
  open: boolean;
  coin: Coin | undefined;
}

export default function CoinBuyDialog(props: Props) {
  const classes = useStyles();
  const { onClose, open, coin } = props;
  const [USD, setUSD] = React.useState<number>(0.0);
  const [currentCoin, setCurrentCoin] = React.useState(0.0);
  const [userContext, setUserContext] = React.useContext(UserContext);

  const [max, setMax] = React.useState(
    userContext?.gameStats.portfolio.get("usd")?.amount ?? 100
  );
  React.useEffect(() => {
    setMax(userContext?.gameStats.portfolio.get("usd")?.amount ?? 100);
  }, [userContext]);

  if (coin === undefined || userContext === undefined) {
    return null;
  }

  const handleClose = () => {
    onClose(!open);
  };
  const handleBuy = () => {
    console.log(currentCoin);
    postTransaction(
      {
        name: coin._id,
        amount: USD / coin.market_data.current_price,
        activity: "buy",
        price: coin.market_data.current_price,
        date: Date.now(),
      },
      userContext._id
    ).then((user) => {
      if (user !== null) {
        setUserContext(setUserHelper(user));
      }
    });
    handleClose();
  };

  if (coin === undefined) {
    return null;
  }
  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle
        style={{
          background: "#005249",
          color: "#fff",
          fontWeight: "bold",
        }}
      >
        Buy {coin.name}
      </DialogTitle>
      <DialogContent style={{ padding: 50 }}>
        <Slider
          style={{
            color: "#005249",
          }}
          value={typeof USD === "number" ? USD : 0}
          min={0}
          onChange={(event: any) => {
            setUSD(event.target.value);
          }}
          max={max}
          aria-label="Default"
          valueLabelDisplay="auto"
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
            id="outlined-USD"
            label="USD"
            fullWidth
            type="number"
            value={USD}
            inputProps={{
              min: 0,
              max: userContext.gameStats.portfolio.get("USD")?.amount,
            }}
            onChange={(event: any) => {
              var value = parseInt(event.target.value, 10);

              if (value > max) value = max;
              if (value < 0) value = 0;
              setUSD(value);
            }}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </div>
        <div style={{ height: 20 }} />
        <div style={{ display: "flex", flexDirection: "row" }}>
          <Typography
            style={{
              margin: "auto",
              marginRight: "20px",
            }}
          >
            {coin.name}
          </Typography>
          <TextField
            className={classes.overrides}
            id="outlined-Coin"
            label="Coin"
            fullWidth
            type="number"
            onChange={(event: any) => {
              setCurrentCoin(event.target.value);
            }}
            value={USD / coin.market_data.current_price}
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
          onClick={handleBuy}
          variant="contained"
          style={{
            padding: 10,
            background: "#1cb101",
            color: "#fff",
          }}
        >
          Buy
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
