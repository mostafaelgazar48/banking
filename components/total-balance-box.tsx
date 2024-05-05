import React from "react";
import AnimatedCounter from "./animated-counter";
import DoughnutChart from "./DoughnutChart";

const TotalBalanceBox = ({
  totalBanks,
  accounts = [],
  totalCurrentBalance,
}: TotalBalanceBoxProps) => {
  return (
    <section className="total-balance w-full">
      <div className="total-balance-chart">
        <DoughnutChart accounts={accounts} />
      </div>
      <div className="flex flex-col gap-6">
        <h2 className="header-2">
          Banks: <span>{totalBanks}</span>
        </h2>
        <p className="total-balance-label">Total Current Balance: </p>
        <div className="total-balance-amount flex-center gap-2">
          {/* CountUp  if we have a package that internally use a client side functionality we can solve it by create a wrapper component to it*/}
          {/* <CountUp end={100} /> */}
          <AnimatedCounter amount={totalCurrentBalance} />
        </div>
      </div>
    </section>
  );
};

export default TotalBalanceBox;
