import React, { useState } from "react";

export const Footer = () => {
  const [clicks, setClicks] = useState(0);

  const year = new Date().getFullYear();
  const companyName = "MartinZzO";

  const handleClick = () => {
    setClicks(clicks + 1 );
  };

  return (
    <div className="container">
      <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">

        <span className="col-md-4 mb-0 text-body-secondary" 
          onClick={handleClick}>
          <p class="col-md-4 mb-0 text-body-secondary">
            &copy;{year} {companyName} Clicks={clicks}
          </p>
        </span>

        <ul class="nav col-md-4 justify-content-end">
          <li class="nav-item">
            <a href="#" class="nav-link px-2 text-body-secondary">
              Home
            </a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link px-2 text-body-secondary">
              Features
            </a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link px-2 text-body-secondary">
              Pricing
            </a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link px-2 text-body-secondary">
              FAQs
            </a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link px-2 text-body-secondary">
              About
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
};
