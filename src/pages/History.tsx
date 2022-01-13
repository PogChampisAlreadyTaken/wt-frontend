import RecentTransactions from "../components/cards/RecentTransactions";

export function History() {
 
  return (
    <div style={{marginTop: "12px", margin: "5px", overflow: "auto", height: "92%"}}>
       <RecentTransactions />
    </div>
  );
}
