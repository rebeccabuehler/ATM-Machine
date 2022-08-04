// this keeps a running total of deposits and withdrawals

const ATMDeposit = ({ onChange, isDeposit }) => {
  const choice = ["Deposit", "Cash Back"];
  return (
    <label className="label huge">
      <h3>{choice[Number(!isDeposit)]}</h3>
      <input type="number" width="200" onChange={onChange}></input>
      <input type="submit" width="200" value="Submit"></input>
    </label>
  );
};

const Account = () => {
  var deposit = 0;
  const [accountState, setAccountState] = React.useState(0);
  const [isDeposit, setIsDeposit] = React.useState(true);

  const handleChange = (event) => {
    console.log(`handleChange ${event.target.value}`);
    deposit = Number(event.target.value);
  };
  const handleSubmit = (event) => {
    let newTotal = isDeposit ? accountState + deposit : accountState - deposit;
    setAccountState(newTotal);
    event.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Account Balance {accountState}</h2>
      <button onClick={() => setIsDeposit(true)}>Deposit</button>
      <button onClick={() => setIsDeposit(false)}>Cash Back</button>
      <ATMDeposit onChange={handleChange} isDeposit={isDeposit}></ATMDeposit>
    </form>
  );
};
// ========================================
ReactDOM.render(<Account />, document.getElementById("root"));

// Can you create functionality so users can’t withdraw more money than they have in their account balance?
// Are there any updates in the user interface that you could change?
//add a feature to prevent cash back greater than account balance
