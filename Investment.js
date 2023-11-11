// import React, { useState } from 'react';

// const InvestmentCalculator = () => {
//   const [investmentId, setInvestmentId] = useState('');
//   const [r, setR] = useState('');
//   const [n, setN] = useState('');
//   const [t, setT] = useState('');
//   const [futureValue, setFutureValue] = useState(null);

//   const calculateFutureValue = async () => {
//     const response = await fetch(`http://localhost:8088/investment/future-value`, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({
//         investmentId,
//         r,
//         n,
//         t,
//       }),
//     });

//     const data = await response.json();
//     setFutureValue(data);
//   };

//   return (
//     <div>
//       <h1>Investment Future Value Calculator</h1>
//       <div>
//         <label>
//           Investment ID:
//           <input type="text" value={investmentId} onChange={(e) => setInvestmentId(e.target.value)} />
//         </label>
//       </div>
//       <div>
//         <label>
//           r (rate):
//           <input type="text" value={r} onChange={(e) => setR(e.target.value)} />
//         </label>
//       </div>
//       <div>
//         <label>
//           n (frequency of compounding):
//           <input type="text" value={n} onChange={(e) => setN(e.target.value)} />
//         </label>
//       </div>
//       <div>
//         <label>
//           t (time in years):
//           <input type="text" value={t} onChange={(e) => setT(e.target.value)} />
//         </label>
//       </div>
//       <button onClick={calculateFutureValue}>Calculate Future Value</button>
//       {futureValue !== null && <div>Future Value: {futureValue}</div>}
//     </div>
//   );
// };

// export default InvestmentCalculator;



import React, { useState } from 'react';

const FutureValueCalculator = () => {
  const [investmentId, setInvestmentId] = useState('');
  const [r, setR] = useState('');
  const [n, setN] = useState('');
  const [t, setT] = useState('');
  const [futureValue, setFutureValue] = useState(null);

  const calculateFutureValue = async () => {
    try {
      const response = await fetch(`http://localhost:8088/investment/future-value/${investmentId}?r=${r}&n=${n}&t=${t}`);
      const data = await response.json();
      setFutureValue(data);
    } catch (error) {
      console.error('Error calculating future value:', error);
    }
  };

  return (
    <div>
      <h1>Future Value Calculator</h1>
      <label>
        Investment ID:
        <input type="text" value={investmentId} onChange={(e) => setInvestmentId(e.target.value)} />
      </label>
      <br />
      <label>
        r (Rate of Interest):
        <input type="number" value={r} onChange={(e) => setR(e.target.value)} />
      </label>
      <br />
      <label>
        n (Number of Compounds per Year):
        <input type="number" value={n} onChange={(e) => setN(e.target.value)} />
      </label>
      <br />
      <label>
        t (Number of Years):
        <input type="number" value={t} onChange={(e) => setT(e.target.value)} />
      </label>
      <br />
      <button onClick={calculateFutureValue}>Calculate Future Value</button>
      <br />
      {futureValue !== null && (
        <div>
          <h2>Future Value:</h2>
          <p>{futureValue}</p>
        </div>
      )}
    </div>
  );
};

export default FutureValueCalculator;