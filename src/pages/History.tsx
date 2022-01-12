import RecentTransactions from "../components/cards/RecentTransactions";

export function History() {
  
  return (
    <div style={{marginTop: "12px", margin: "10px", overflow: "auto", height: "91%"}}>
       <RecentTransactions />
    </div>
  );
}
