import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Slider,
  TextField,
  Typography,
} from "@mui/material";

import Button from "@mui/material/Button";
import * as React from "react";
import { Coin, emptyUser } from "../../model";
import { postTransaction } from "../../request/gameService";

interface Props {
  onClose: (open: boolean) => void;
  open: boolean;
  coin: Coin | undefined;
}

export default function CoinBuyDialog(props: Props) {
  const { onClose, open, coin } = props;
  const [USD, setUSD] = React.useState<number>(0.0);
  const [currentCoin, setCurrentCoin] = React.useState(0.0);
  const [user, setUser] = React.useState(emptyUser());
  user.gameStats = {
    portfolio: {
      ["USD"]: {
        amount: 500,
        name: "USD",
      },
    },
    dailyProfit: 1,
    totalProfit: 2,
    roundProfit: 3,
    recentTransactions: [],
  };
  const [max, setMax] = React.useState(user.gameStats?.portfolio["USD"].amount);
  if (coin === undefined) {
    return null;
  }
  const handleClose = () => {
    onClose(!open);
  };
  const handleBuy = () => {
    postTransaction(
      {
        name: coin.name,
        amount: USD,
        price: coin.market_data.current_price,
        date: Date.now(),
      },
      user.id
    );
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
          max={user.gameStats?.portfolio["USD"].amount}
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
            id="outlined-USD"
            label="USD"
            fullWidth
            type="number"
            value={USD}
            inputProps={{
              min: 0,
              max: user.gameStats?.portfolio["USD"].amount,
            }}
            onChange={(event: any) => {
              var value = parseInt(event.target.value, 10);

              if (value > max) value = max;
              if (value < 0) value = 0;
              setUSD(value);
              console.log(typeof USD);
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
          style={{ padding: 10 }}
        >
          Cancel
        </Button>
        <Button onClick={handleBuy} variant="contained" style={{ padding: 10 }}>
          Buy
        </Button>
      </DialogActions>
    </Dialog>
  );
}
