import React, { useState } from 'react';
import axios from 'axios';

const BudgetControllerComponent = () => {
  const [budgetId, setBudgetId] = useState('');
  const [budget, setBudget] = useState(null);
  const [allocatedAmount, setAllocatedAmount] = useState('');
  const [budgetCategory, setBudgetCategory] = useState('');

  // Function to create a budget
//   const createBudget = async (budgetData) => {
//     try {
//       const response = await axios.post('http://localhost:8088/budgets/create', budgetData);
//       console.log('Budget created:', response.data);
//     //   setBudgetId(response.data);
//       getBudgetById(response.data.budgetId);
      
//     } catch (error) {
//       console.error('Error creating budget:', error);
//     }
//   };

  // Function to get budget by ID
  const getBudgetById = async (budgetId) => {
    try {
      const response = await axios.get(`http://localhost:8088/budgets/${budgetId}`);
      setBudget(response.data);
    } catch (error) {
      console.error('Error getting budget:', error);
    }
  };

  return (
    <div>
      <h1>Budget Controller</h1>
      <div>
        <label>
          Budget ID:
          <input type="text" value={budgetId} onChange={(e) => setBudgetId(e.target.value)} />

        </label>
        {/* <label> Allocated Amount 
        <input type="text" value={allocatedAmount} onChange={(e) => setAllocatedAmount(e.target.value)} />
        </label>
        <label> Budget Category 
        <input type="text" value={budgetCategory} onChange={(e) => setBudgetCategory(e.target.value)} />
        </label> */}
      </div>
      
      <div>
        <button onClick={() => getBudgetById(budgetId)}>Get Budget</button>
      </div>
      {budget && (
        <div>
          <h2>Budget Details</h2>
          <p>Budget ID: {budget.budgetId}</p>
          <p>Allocated Amount: {budget.allocatedAmount}</p>
          
           <p>Budget Category : {budget.budgetCategory}</p>
          
        </div>
      )}
    </div>
  );
};

export default BudgetControllerComponent;
