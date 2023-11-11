import React, { useState } from 'react';
import axios from 'axios';

const PortfolioControllerComponent = () => {
  const [portfolioId, setPortfolioId] = useState('');
  const [portfolio, setPortfolio] = useState(null);

  // Function to create a portfolio
  const createPortfolio = async (portfolioData) => {
    try {
      const response = await axios.post('http://localhost:8088/portfolio/create', portfolioData);
      console.log('Portfolio created:', response.data);
    } catch (error) {
      console.error('Error creating portfolio:', error);
    }
  };

  // Function to get portfolio by ID
  const getPortfolioById = async (portfolioId) => {
    try {
      const response = await axios.get(`http://localhost:8088/portfolio/${portfolioId}`);
      setPortfolio(response.data);
    } catch (error) {
      console.error('Error getting portfolio:', error);
    }
  };

  // Function to update portfolio
  const updatePortfolio = async (portfolioId, portfolioData) => {
    try {
      const response = await axios.put(`http://localhost:8088/portfolio/${portfolioId}`, portfolioData);
      console.log('Portfolio updated:', response.data);
    } catch (error) {
      console.error('Error updating portfolio:', error);
    }
  };

  // Function to delete portfolio by ID
  const deletePortfolioById = async (portfolioId) => {
    try {
      const response = await axios.delete(`http://localhost:8088/portfolio/${portfolioId}`);
      console.log(response.data);
    } catch (error) {
      console.error('Error deleting portfolio:', error);
    }
  };

  return (
    <div>
      <h1>Portfolio Controller</h1>
      <div>
        <label>
          Portfolio ID:
          <input type="text" value={portfolioId} onChange={(e) => setPortfolioId(e.target.value)} />
        </label>
      </div>
      <div>
        <button onClick={() => createPortfolio({ /* portfolio data here */ })}>Create Portfolio</button>
      </div>
      <div>
        <button onClick={() => getPortfolioById(portfolioId)}>Get Portfolio</button>
      </div>
      <div>
        <button onClick={() => updatePortfolio(portfolioId, { /* updated portfolio data here */ })}>Update Portfolio</button>
      </div>
      <div>
        <button onClick={() => deletePortfolioById(portfolioId)}>Delete Portfolio</button>
      </div>
      {portfolio && (
        <div>
          <h2>Portfolio Details</h2>
          <p>Portfolio ID: {portfolio.id}</p>
          {/* Display other portfolio details here */}
        </div>
      )}
    </div>
  );
};

export default PortfolioControllerComponent;
