// import React, { useState } from 'react';
// import axios from 'axios';

//   const BudgetCreate = () => {
// const [budgetId, setBudgetId] = useState('');
//   const [budget, setBudget] = useState(null);
//   const [allocatedAmount, setAllocatedAmount] = useState('');
//   const [budgetCategory, setBudgetCategory] = useState('');
//   const [user, setUser] = useState('');
// //   Function to create a budget
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
//     return (
//     //   <div>BudgetCreate</div>
//     <div>
//         <h1> Create Budget </h1>
//         <div>
//             <label>
//                 User Id :
//                 <input type="text" value={user} onChange={(e) => setUser(e.target.value)} />

//             </label>
//             <label> Allocated Amount 
//         <input type="text" value={allocatedAmount} onChange={(e) => setAllocatedAmount(e.target.value)} />
//         </label>
//         <label> Budget Category 
//         <input type="text" value={budgetCategory} onChange={(e) => setBudgetCategory(e.target.value)} />
//         </label>
//         </div>
//     </div>
//     )
//   }
  
//   export default BudgetCreate;


import React, { useState } from 'react';
import axios from 'axios';

const BudgetCreate = () => {
//   const [budgetId, setBudgetId] = useState('');
  const [budget, setBudget] = useState(null);
  const [allocatedAmount, setAllocatedAmount] = useState('');
  const [budgetCategory, setBudgetCategory] = useState('');
  const [user, setUser] = useState('');
//   const [budgt, setBudget] = useState('');

  // Function to create a budget
  const createBudget = async (budgetData) => {
    try {
      const response = await axios.post('http://localhost:8088/budgets/create', budgetData);
      setBudget(response.data);
      console.log('Budget created:', response.data);
      return response.data;
      // Assuming getBudgetById is a function that fetches the budget by ID
    //   getBudgetById(response.data.budgetId);
    } catch (error) {
      console.error('Error creating budget:', error);
    }
  };

  // Assuming this is your function to fetch the budget by ID
//   const getBudgetById = async (id) => {
//     try {
//       const response = await axios.get(`http://localhost:8088/budgets/${id}`);
//       setBudget(response.data);
//     } catch (error) {
//       console.error('Error getting budget by ID:', error);
//     }
//   };

  return (
    <div>
      <h1>Create Budget</h1>
      <div>
        <label>
          User Id:
          <input type="text" value={user} onChange={(e) => setUser(e.target.value)} />
        </label>
        <label>
          Allocated Amount:
          <input type="text" value={allocatedAmount} onChange={(e) => setAllocatedAmount(e.target.value)} />
        </label>
        <label>
          Budget Category:
          <input type="text" value={budgetCategory} onChange={(e) => setBudgetCategory(e.target.value)} />
        </label>
      </div>
      <div>
        <button onClick={() => createBudget({
          user: {
            "usersId" : user
          },
          allocatedAmount: parseFloat(allocatedAmount),
          budgetCategory: budgetCategory,
        })
    }>Create Budget</button>
      </div>
        {budget && (
        <div>
          <h2>Budget Details</h2>
          <p>usersId: {user}</p>
          <p>Allocated Amount: {budget.allocatedAmount}</p>
          
           <p>Budget Category : {budget.budgetCategory}</p>
          
        </div>
      )} 
    </div>
  );
};

export default BudgetCreate;
