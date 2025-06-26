import CreateCustomer from "./features/customers/CreateCustomer";
import Customer from "./features/customers/Customer";
import AccountOperations from "./features/accounts/AccountOperations";
import BalanceDisplay from "./features/accounts/BalanceDisplay";
import { useSelector } from "react-redux";

function App() {
  const customer = useSelector((state) => state.customer);
  return (
    <div>
      <h1>🏦 The React-Redux Bank ⚛️</h1>
      {!customer.fullName ? (
        <CreateCustomer />
      ) : (
        <>
          <Customer customer={customer}/>
          <AccountOperations />
          <BalanceDisplay />
        </>
      )}
    </div>
  );
}

export default App;
