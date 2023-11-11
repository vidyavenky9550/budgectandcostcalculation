// import React, { useState } from 'react';
// import axios from 'axios';

// const ExpenseControllerComponent = () => {
//   const [category, setCategory] = useState('');
//   const [spendingPercentage, setSpendingPercentage] = useState(null);
//   const [user_id, setUser_Id] = useState('');
// //   const []


//   // Function to create an expense
//   const createExpense = async (expense) => {
//     try {
//       const response = await axios.post('http://localhost:8088/expenses/create', expense);
//       console.log('Expense created:', response.data);
//     } catch (error) {
//       console.error('Error creating expense:', error);
//     }
//   };

//   // Function to get spending percentage by category
//   const getSpendingPercentage = async (category) => {
//     try {
//       const response = await axios.get(`http://localhost:8088/expenses/category/${category}`);
//       setSpendingPercentage(response.data);
//     } catch (error) {
//       console.error('Error getting spending percentage:', error);
//     }
//   };

//   return (
//     <div>
//       <h1>Expense Controller</h1>
//       <div>
//         <label>
//           Category:
//           <input type="text" value={category} onChange={(e) => setCategory(e.target.value)} />
//         </label>
//       </div>
//       <div>
//         <button onClick={() => createExpense({ /* expense data here */ })}>Create Expense</button>
//       </div>
//       <div>
//         <button onClick={() => getSpendingPercentage(category)}>Get Spending Percentage</button>
//       </div>
//       {spendingPercentage !== null && <div>Spending Percentage: {spendingPercentage}</div>}
//     </div>
//   );
// };

// export default ExpenseControllerComponent;



import React, { useState } from 'react';
import axios from 'axios';

const ExpenseControllerComponent = () => {
  const [category, setCategory] = useState('');
  const [spendingPercentage, setSpendingPercentage] = useState(null);

  // Function to get spending percentage by category
  const getSpendingPercentage = async (category) => {
    try {
      const response = await axios.get(`http://localhost:8088/expenses/category/${category}`);
      setSpendingPercentage(response.data);
    } catch (error) {
      console.error('Error getting spending percentage:', error);
    }
  };

  return (
    <div>
      <h1>Expense Controller</h1>
      <div>
        <label>
          Category:
          <input type="text" value={category} onChange={(e) => setCategory(e.target.value)} />
        </label>
      </div>
      <div>
        {/* Removed Create Expense button */}
      </div>
      <div>
        <button onClick={() => getSpendingPercentage(category)}>Get Spending Percentage</button>
      </div>
      {spendingPercentage !== null && <div>Spending Percentage: {spendingPercentage}</div>}
    </div>
  );
};

export default ExpenseControllerComponent;
