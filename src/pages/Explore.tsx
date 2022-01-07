import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { makeStyles } from "@material-ui/core/styles";
import { getAllCoins } from "../request/coinService";
import { checkData, Coin } from "../model";
import { CoinContext } from "../context/coinContext";
import { Chart } from "react-google-charts";

export const data = [
  ["date", "prices"],
  [1515369600000, 15900.3650216006],
  [1515456000000, 15604.7234082405],
  [1515542400000, 15509.2701268168],
  [1515628800000, 14050.5696063543],
  [1520380800000, 10727.716249205],
  [1520467200000, 9999.68248604677],
  [1520553600000, 9420.85488958591],
  [1520640000000, 9276.33759031006],
  [1520726400000, 8890.86580399612],
  [1520812800000, 9512.45611286134],
  [1520899200000, 9232.70587979953],
  [1520985600000, 9216.53097626842],
  [1521072000000, 8307.22338626638],
  [1521158400000, 8359.36528334063],
  [1521244800000, 8520.00815917187],
  [1521331200000, 8063.4097921227],
  [1521417600000, 8217.84219996114],
  [1521504000000, 8640.52143024258],
  [1521590400000, 8926.82049620007],
  [1521676800000, 8970.31790627893],
  [1521763200000, 8736.38576909829],
  [1521849600000, 8824.59283177853],
  [1521936000000, 8621.15079225785],
  [1522022400000, 8478.63819558905],
  [1522108800000, 8186.19606281355],
  [1522195200000, 7836.76304425289],
  [1522281600000, 7930.77954092755],
  [1522368000000, 7126.89519256736],
  [1522454400000, 6897.26857786945],
  [1522540800000, 6975.27531402076],
  [1522627200000, 6836.57232729678],
  [1522713600000, 7080.41723231299],
  [1522800000000, 7464.35609406668],
  [1522886400000, 6845.31597826858],
  [1522972800000, 6855.42230460675],
  [1523059200000, 6628.75445585626],
  [1523145600000, 6884.47723505995],
  [1523232000000, 6984.8089659738],
  [1523318400000, 6778.4915700774],
  [1523404800000, 6829.31650379539],
  [1523491200000, 6925.10199547663],
  [1523577600000, 7836.39699399927],
  [1523664000000, 7845.75284010594],
  [1523750400000, 7897.71993085806],
  [1523836800000, 8258.06708369755],
  [1523923200000, 8030.99926195254],
  [1524009600000, 7873.63551010255],
  [1524096000000, 8097.41823310301],
  [1524182400000, 8277.46063916253],
  [1524268800000, 8499.45000871487],
  [1524355200000, 8878.42826029723],
  [1524441600000, 8769.01199947348],
  [1524528000000, 8881.39170434545],
  [1524614400000, 9716.48975733072],
  [1524700800000, 8825.2025000693],
  [1524787200000, 9221.86802618436],
  [1524873600000, 8940.38112200719],
  [1524960000000, 9249.65952508923],
  [1525046400000, 9325.62885104679],
  [1525132800000, 9198.18950997327],
  [1525219200000, 9024.3875117766],
  [1525305600000, 9122.65301383019],
  [1525392000000, 9551.13518381566],
  [1525478400000, 9634.53822597227],
  [1525564800000, 9766.24448548887],
  [1525651200000, 9583.87174550137],
  [1525737600000, 9308.26502572185],
  [1525824000000, 9149.51783314723],
  [1525910400000, 9248.96039558449],
  [1525996800000, 8969.94037574258],
  [1526083200000, 8405.5605632418],
  [1526169600000, 8480.58037612559],
  [1526256000000, 8683.9862031429],
  [1526342400000, 8696.97400387283],
  [1526428800000, 8473.34864905366],
  [1526515200000, 8343.1252216955],
  [1526601600000, 8056.05319237475],
  [1526688000000, 8202.82540955214],
  [1526774400000, 8180.62700991409],
  [1526860800000, 8443.26024591542],
  [1526947200000, 8354.99633591748],
  [1527033600000, 8009.2995067828],
  [1527120000000, 7556.31604292077],
  [1527206400000, 7563.43546544346],
  [1527292800000, 7472.02260174872],
  [1527379200000, 7328.87167436352],
  [1527465600000, 7326.64394017867],
  [1527552000000, 7111.06892466996],
  [1527638400000, 7451.2308372653],
  [1527724800000, 7380.8515577098],
  [1527811200000, 7460.16694986577],
  [1527897600000, 7487.07630453815],
  [1527984000000, 7567.51293761927],
  [1528070400000, 7639.87944568278],
  [1528156800000, 7463.65499554503],
  [1528243200000, 7569.01133988542],
  [1528329600000, 7605.57848860797],
  [1528416000000, 7613.77739337755],
  [1528502400000, 7561.16610052452],
  [1528588800000, 7415.00137858946],
  [1528675200000, 6767.49948454925],
  [1528761600000, 6880.13364875604],
  [1528848000000, 6581.82807522796],
  [1528934400000, 6334.09890642618],
  [1529020800000, 6644.72067973844],
  [1529107200000, 6406.80704950998],
  [1529193600000, 6478.81592433021],
  [1529280000000, 6418.85000188746],
  [1529366400000, 6677.53340291194],
  [1529452800000, 6708.68182027534],
  [1529539200000, 6714.37546123014],
  [1529625600000, 6690.832151608],
  [1529712000000, 6088.57944239075],
  [1529798400000, 6169.43726386169],
  [1529884800000, 6159.70719379414],
  [1529971200000, 6241.84871170546],
  [1530057600000, 6069.87260616628],
  [1530144000000, 6117.03640962264],
  [1530230400000, 5879.98897440643],
  [1530316800000, 6182.25674792295],
  [1530403200000, 6366.49946751097],
  [1530489600000, 6312.87724313135],
  [1530576000000, 6595.5473128085],
  [1530662400000, 6497.60735494217],
  [1530748800000, 6562.7217371211],
  [1530835200000, 6537.74087162192],
  [1530921600000, 6603.29470396542],
  [1531008000000, 6759.83608914527],
  [1531094400000, 6700.63547905209],
  [1531180800000, 6648.256795903321],
  [1531267200000, 6303.380664729323],
  [1531353600000, 6373.234804689936],
  [1531440000000, 6230.5901971047815],
  [1531526400000, 6248.397313033797],
  [1531612800000, 6246.13741162634],
  [1531699200000, 6349.695836710773],
  [1531785600000, 6741.6919602852695],
  [1531872000000, 7303.373059795855],
  [1531958400000, 7334.771372076191],
  [1532044800000, 7442.800738748321],
  [1532131200000, 7331.871523239401],
  [1532217600000, 7379.137271821949],
  [1532304000000, 7395.8664054401],
  [1532390400000, 7704.99567890457],
  [1532476800000, 8422.37392335148],
  [1532563200000, 8144.553482041877],
  [1532649600000, 7929.079243602936],
  [1532736000000, 8145.333168120666],
  [1532822400000, 8192.13570223742],
  [1532908800000, 8197.593575814208],
  [1532995200000, 8185.921138302329],
];


export const options = {
  chartArea: { backgroundColor: "white" },
  backgroundColor: "transparent",
  lineWidth: 1,
  legend: "none",
  tooltip: { trigger: "none" },
  series: {
    0: { curveType: "function", color: "#00281b" },
  },
};

export function Explore() {
  const classes = useStyles();
  const [coinContext, setCoinContext] = React.useContext(CoinContext);

  React.useEffect(() => {
    if (checkData(coinContext)) {
      getAllCoins().then((coins) => setCoinContext(coins));
    }
  }, []);

  return (
    <div className={classes.exploreTable}>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead style={{background: "#24695c"}}>
            <TableRow>
              <TableCell style={{color: "#fff", fontWeight: "bold"}}>Coin</TableCell>
              <TableCell style={{color: "#fff", fontWeight: "bold"}} align="right">Price</TableCell>
              <TableCell style={{color: "#fff", fontWeight: "bold"}} align="right">Rank</TableCell>
              <TableCell style={{color: "#fff", fontWeight: "bold"}} align="right">Market Cap</TableCell>
              <TableCell style={{color: "#fff", fontWeight: "bold"}} align="right">Last 7 Days</TableCell>
              <TableCell style={{color: "#fff", fontWeight: "bold"}} align="right">Chart</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {coinContext.coins.map((row) => {
              {
                if (!row) return null;
              }
              return (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="right">
                    {row.market_data.current_price}
                  </TableCell>
                  <TableCell align="right">
                    {row.market_data.market_cap_rank}
                  </TableCell>
                  <TableCell align="right">
                    {row.market_data.market_cap}
                  </TableCell>
                  <TableCell align="right">
                    {row.market_data.price_change_percentage_7d}
                  </TableCell>
                  <TableCell align="right" padding="none">
                    <Chart
                      chartType="AreaChart"
                      width="100px"
                      height="80px"
                      data={data}
                      options={options}
                    />
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

const useStyles = makeStyles({
  exploreTable: {
    padding: "5px",
  },
});
