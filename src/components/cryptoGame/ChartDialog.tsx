import { Dialog, DialogActions, DialogTitle } from "@mui/material";
import { Coin } from "../../model";
import { DialogContent } from "@mui/material";
import { Chart } from "react-google-charts";
import { Button } from "@material-ui/core";

export const options = {
  chartArea: { backgroundColor: "white" },
  backgroundColor: "transparent",
  lineWidth: 2,
  is3D: true,
  series: {
    0: { curveType: "function", color: "#00281b" },
  },
  hAxis: {
    format: "M/d/yy",
  },
  vAxis: {
    format: "currency",
  },
};
interface Props {
  onClose: (open: boolean) => void;
  open: boolean;
  coin: Coin | undefined;
}

export default function ChartDialog(props: Props) {
  const { onClose, open, coin } = props;

  if (coin === undefined) {
    return null;
  }

  const handleClose = () => {
    onClose(!open);
  };

  return (
    <Dialog fullWidth maxWidth="lg" onClose={handleClose} open={open}>
      <DialogTitle>
        <img
          style={{ marginRight: "5px", marginBottom: "-5px" }}
          src={coin?.image}
          alt="Logo"
        />
        - {coin.name} Chart{" "}
      </DialogTitle>
      <DialogContent>
        <div style={{ width: "full" }}>
          <Chart
            chartType="AreaChart"
            width="100%"
            height="100%"
            data={[
              ...[["date", "prices"]],
              ...coin.market_data.history.map((h) => [new Date(h[0]), h[1]]),
            ]}
            options={options}
          />
        </div>
      </DialogContent>
      <DialogActions>
        <Button
          variant="outlined"
          style={{ background: "#005249", color: "#fff" }}
          onClick={handleClose}
        >
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
}
