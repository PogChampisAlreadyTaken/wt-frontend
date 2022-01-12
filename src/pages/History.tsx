import { height } from "@mui/system";
import RecentTransactions from "../components/cards/RecentTransactions";

export function History() {
  
  return (
    <div style={{padding: "10px" , height: "92%"}}>
      <RecentTransactions />
    </div>
  );
}
