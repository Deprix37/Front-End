import React from "react";
import { useBalance } from "../../contexts/balanceContext";
import "./header.css";

const Header = () => {
  const { balance, totalSpent } = useBalance();

  const remainingBalance = balance - totalSpent;

  return (
    <div className="header">
      <img
        src="images/billgates.jpg"
        alt="Bill Gates"
        className="profile-pic"
      />
      <h1>Spend Bill Gates' Money</h1>
      <p className="data">${balance.toLocaleString("en-US")}</p>
    </div>
  );
};

export default Header;
