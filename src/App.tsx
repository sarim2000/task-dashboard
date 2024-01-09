import Card from "./components/card/card";
import Navbar from "./components/navbar/navbar";
import NormalCard from "./components/normalcard/normalcard";
import Sidebar from "./components/sidebar/sidebar";
import Table from "./components/table/table";

function App() {
  return (
    <div className="container">
      <Sidebar />
      <div className="main">
        <Navbar />
        <div className="maincontent">
          <div className="first-row">
            <div className="first-row-left">
              <h5>Overview</h5>
            </div>
            <div className="first-row-right">
              <select name="calendar" id="" className="first-row-right-select">
                <option value="month">This Month</option>
              </select>
            </div>
          </div>
          <div className="second-row">
            <Card />
            <NormalCard
              cardTopName="Amount Pending"
              numberOfOrders={"13"}
              price={"92,312"}
            />
            <NormalCard
              cardTopName="Amount Processed"
              numberOfOrders={"0"}
              price={"23,92,312.19"}
            />
          </div>
          <div className="third-row">
            <div className="third-row-left">
              <h5>Transactions | This Month</h5>
            </div>
          </div>
          <div className="button-container">
            <button className="pill-button ">Payouts (22)</button>
            <button className="pill-button active">Refunds (6)</button>
          </div>
          <div className="fifth-row">
            <Table/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
