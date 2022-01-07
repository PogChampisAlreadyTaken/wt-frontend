import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@mui/material/Typography";
import { Chart } from "react-google-charts";
import CardMedia from "@mui/material/CardMedia";

export const data = [
  ["Time", "Price"],
  [0, 0],
  [1, 10],
  [2, 60],
  [3, 17],
  [4, 18],
  [5, 9],
  [6, 123],
  [7, 27],
  [7, 27],
];

export const options = {
  chartArea: { backgroundColor: "#0000004d" },
  backgroundColor: "transparent",
  lineWidth: 3,
  pointSize: 10,
  legend: 'none',
  hAxis: {
    textStyle:{color: '#fff'},
  },
  vAxis: {
    textStyle:{color: '#fff'}
  },
  series: {
    0: { curveType: "function", color: '#fff' },
  },
};

export default function PortfolioSum() {
  const classes = useStyles();
  return (
    <Card className={classes.portfolioSum}>
      <CardContent>
        <Typography variant="h5" component="h2">
          Portfolio Sum
        </Typography>
        12938.00 USD
      </CardContent>
      <CardMedia>
        <div style={{ backgroundColor: "#24695c" }}  >
        <Chart
          chartType="AreaChart"
          width="100%"
          height="100%"
          data={data}
          options={options}
        />
        </div>
      </CardMedia>
      <CardActions></CardActions>
    </Card>
  );
}

const useStyles = makeStyles({
  portfolioSum: {
    height: "100%",
    background: "#24695c",
    boxShadow: "0 0 1px 0px rgb(0 0 0)",
    color: "#fff",
  },
});
