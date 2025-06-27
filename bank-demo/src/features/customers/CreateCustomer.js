import { useState } from "react";
import {create,update}  from "./customerSlicer";
import { useDispatch } from "react-redux";
import store from "../../store/store";

function Customer() {
  const [fullName, setFullName] = useState("");
  const [nationalId, setNationalId] = useState("");
  const dispatch = useDispatch();

  function handleClick(e) {
    if(!fullName || !nationalId) return;
    
    const newCustomer = {
      fullName: fullName,
      nationalId: nationalId,
      createdAt: new Date().toISOString(),
    };
    dispatch(create(newCustomer));
  }

  return (
    <div>
      <h2>Create new customer</h2>
      <div className="inputs">
        <div>
          <label>Customer full name</label>
          <input
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
        </div>
        <div>
          <label>National ID</label>
          <input
            value={nationalId}
            onChange={(e) => setNationalId(e.target.value)}
          />
        </div>
        <button onClick={handleClick}>Create new customer</button>
      </div>
    </div>
  );
}

export default Customer;
