import { useState } from "react";

export default function IncreaseBalance({ coinBalance }) {
  const [balance, setBalance] = useState(coinBalance);

  function handleClick() {
    setBalance(balance + 1);
  }

  return (
    <div className="button-wrapper">
      <p className="credit-count">Credit: {`£${balance}`}</p>
      <button type="button" className="button" onClick={handleClick}>
        Insert Coin
      </button>
    </div>
  );
}
