import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <nav className='main-nav'>
        <div className='logo'>
          <h2>
            <span>B</span>udget and <span>C</span>ost Calculation
          </h2>
        </div>

        <div className='menu-link'>
          <ul>
            <li>
            {/* <Link to="/expenses">Expenses</Link> */}
                
              <a href='expense'>Expense</a>
            </li>
            <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle navbar-text-white"
                  href="/#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Budget
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <Link to="/Budget" className="dropdown-item">
                  Budget Controller
                  </Link>
                  <Link to="/BudgetCreate" className="dropdown-item">
                  Create Budget
                  </Link>
                </div>
              </li>
            {/* <li>
                
              <a href='Budget'>Budget</a>
            </li> */}
            <li>
              <a href='Investment'>Investment</a>
            </li>
            <li>
              <a href='Portfolio'>Portfolio</a>
            </li>
            <li>
              {/* <a href='#'>Users</a> */}
            </li>
          </ul>
        </div>
      </nav>
      <section className='hero-secction'>
        <p>Welcome to </p>
        <h1>Budgeting and Cost Calculation</h1>
      </section>
    </div>
  );
};

export default Navbar;
