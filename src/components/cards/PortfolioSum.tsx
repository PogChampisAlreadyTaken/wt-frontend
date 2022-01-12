import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@mui/material/Typography";
import { Chart } from "react-google-charts";
import CardMedia from "@mui/material/CardMedia";
import FunctionsIcon from '@mui/icons-material/Functions';
import { UserContext } from "../../context/userContext";
import { CoinContext } from "../../context/coinContext";


export const options = {
  chartArea: { backgroundColor: "#0000004d" },
  backgroundColor: "transparent",
  lineWidth: 3,
  pointSize: 10,
  legend: { position: "none" },
  hAxis: {
    format: "d/M/yy",
    textStyle: { color: "#fff" },
  },
  vAxis: {
    textStyle: { color: "#fff" },
    format: "currency",
  },
  series:{
    0: { curveType: "function", color: "#fff" },
  },
};

const pieOptions = {
  pieHole: 0.50,
  backgroundColor: "transparent",
  slices: [
    {
      color: "#2BB673",
    },
    {
      color: "#d91e48",
    },
    {
      color: "#007fad",
    },
    {
      color: "#e9a227",
    },
  ],
  legend: {
    position: "bottom",
    alignment: "center",
    textStyle: {
      color: "#fff",
      fontSize: 14,
    },
  },
  tooltip: {
    showColorCode: true,
  },
  chartArea: {
    left: 0,
    top: 0,
    width: "100%",
    height: "80%",
  },
};

export default function PortfolioSum() {
  const classes = useStyles();
  const [userContext, setUserContext] = React.useContext(UserContext);
  const [coinContext, setCoinContext] = React.useContext(CoinContext);

  const pieChartData = () => {
    const pieData: any[] = [["Coin", "Amount"]];
    userContext?.gameStats.portfolio.forEach((coin) => {
      const coinTmp = coinContext.coins.find((c) => c._id === coin.name);
      const price = coinTmp?.market_data.current_price??0; 
      pieData.push([
        coin.name,
        coin.amount * (price)
      ]);
    });
    return pieData;
  };

  if (userContext === null) {
    return null;
  }

  return (
    <Card className={classes.portfolioSum}>
      <CardContent>
        <Typography variant="h5" component="h2">
        <FunctionsIcon style={{ marginBottom: "-4px" }} /> Portfolio Sum
        </Typography>
      </CardContent>
      <CardMedia>
      <div style={{ backgroundColor: "#24695c" }}>
          <Typography>Week performance</Typography>
        <Chart
        style={{ marginLeft: "15px" }}
          chartType="AreaChart"
          width="100%"
          height="100%"
          data={[
            ...[["date", "prices"]],
            ...userContext?.gameStats.history.map((h) => [
              new Date(h[0]),
              h[1],
            ]),
          ]}
          options={options}
        />
        </div>

        <div>
          <Typography>Coin share</Typography>
          <Chart
            style={{ marginTop: "25px" }}
            chartType="PieChart"
            data={pieChartData()}
            options={pieOptions}
            width={"100%"}
            height={"290px"}
            legend_toggle
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
