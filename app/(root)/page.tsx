import HeaderBox from "@/components/header-box";
import TotalBalanceBox from "@/components/total-balance-box";
import React from "react";
import RightSidebar from "@/components/RightSidebar";

const Home = () => {
  const loggedInUser = {
    firstName: "Mostafa",
    lastName: "Elgazzar",
    email: "mostafa@gmail.com",
  };
  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            title="Welcome "
            subtext="This is the home page of the app."
            type="greeting"
            user={loggedInUser.firstName || "Guest"}
          />
          <TotalBalanceBox
            totalBanks={3}
            totalCurrentBalance={1000}
            accounts={[]}
          />
        </header>
        TRANSACTIONS HISTORY
      </div>
      <RightSidebar
        user={loggedInUser}
        transactions={[]}
        banks={[
          {
            name: "CIB Bank",
            currentBalance: 1000,
            mask: "1234",
          },
          {
            name: "QNB Bank",
            currentBalance: 2000,
            mask: "5678",
          },
        ]}
      />
    </section>
  );
};

export default Home;
