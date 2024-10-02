import React from 'react';

function App() {
  return (
    <>
      <style>
        {`
        /* Global Styles */
        body {
          font-family: 'Helvetica Neue', Arial, sans-serif;
          margin: 0;
          padding: 0;
          background-color: #f4f4f9;
          color: #333;
        }

        header, footer {
          background-color: #010101;
          color: white;
          text-align: center;
          padding: 20px 0;
        }

        h1, h2, h3, p {
          margin: 0;
          padding: 0;
        }

        .container {
          width: 80%;
          margin: 0 auto;
        }

        /* Header Styles */
        .header-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        h1 {
          font-size: 2rem;
          color: #ff6347;
        }

        .nav-links {
          list-style: none;
          display: flex;
          gap: 20px;
        }

        .nav-links a {
          color: white;
          text-transform: uppercase;
          transition: color 0.3s;
        }

        .nav-links a:hover {
          color: #ff6347;
        }

        /* Hero Section */
        .hero-section {
          background-color: #ff6347;
          color: white;
          text-align: center;
          padding: 100px 0;
        }

        .hero-section h1 {
          font-size: 3rem;
          margin-bottom: 20px;
        }

        .hero-section p {
          font-size: 1.5rem;
          margin-bottom: 40px;
        }

        .button-primary {
          background-color: white;
          color: #ff6347;
          padding: 10px 20px;
          border: none;
          border-radius: 5px;
          font-size: 1.2rem;
          cursor: pointer;
          transition: background-color 0.3s;
        }

        .button-primary:hover {
          background-color: #e55337;
        }

        /* Menu Section */
        .menu-section {
          padding: 50px 0;
          text-align: center;
        }

        .menu-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }

        .menu-item {
          background-color: white;
          border-radius: 10px;
          overflow: hidden;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          transition: transform 0.3s;
        }

        .menu-item:hover {
          transform: scale(1.05);
        }

        .menu-item img {
          width: 100%;
          height: 200px;
          object-fit: cover;
        }

        .menu-item h3 {
          font-size: 1.5rem;
          margin: 15px 0;
        }

        .menu-item p {
          font-size: 1.2rem;
          color: #ff6347;
        }

        /* Reservation Form */
        form {
          display: flex;
          flex-direction: column;
          gap: 15px;
          max-width: 400px;
          margin: 50px auto;
          background-color: #ffffff;
          padding: 20px;
          border-radius: 10px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }

        form label {
          font-weight: bold;
        }

        form input {
          padding: 10px;
          border: 1px solid #ccc;
          border-radius: 5px;
        }

        form button {
          margin-top: 20px;
          background-color: #ff6347;
          color: white;
          border: none;
          padding: 10px;
          cursor: pointer;
          border-radius: 5px;
        }

        form button:hover {
          background-color: #e55337;
        }

        /* Footer Styles */
        footer p {
          color: #aaa;
          font-size: 0.9rem;
        }

        /* Mobile Styles */
        @media (max-width: 768px) {
          .menu-grid {
            grid-template-columns: 1fr;
          }

          .hero-section h1 {
            font-size: 2rem;
          }

          .hero-section p {
            font-size: 1rem;
          }
        }
        `}
      </style>

      {/* Header */}
      <header>
        <div className="container header-container">
          <h1>Little Lemon</h1>
          <nav>
            <ul className="nav-links">
              <li><a href="/">Home</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/reservations">Reservations</a></li>
              <li><a href="/menu">Menu</a></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <h1>Welcome to Little Lemon</h1>
          <p>Experience the finest Mediterranean cuisine</p>
          <button className="button-primary">Reserve a Table</button>
        </div>
      </section>

      {/* Menu Section */}
      <section className="menu-section">
        <div className="container">
          <h2>Our Menu</h2>
          <div className="menu-grid">
            <div className="menu-item">
              <img src="https://via.placeholder.com/400x200" alt="Greek Salad" />
              <h3>Greek Salad</h3>
              <p>$12.99</p>
            </div>
            <div className="menu-item">
              <img src="https://via.placeholder.com/400x200" alt="Pasta" />
              <h3>Pasta</h3>
              <p>$15.99</p>
            </div>
            <div className="menu-item">
              <img src="https://via.placeholder.com/400x200" alt="Pizza" />
              <h3>Pizza</h3>
              <p>$13.99</p>
            </div>
          </div>
        </div>
      </section>

      {/* Reservation Form */}
      <section className="reservation-section">
        <div className="container">
          <h2>Reserve a Table</h2>
          <form>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" required />

            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />

            <label htmlFor="date">Date</label>
            <input type="date" id="date" name="date" required />

            <label htmlFor="time">Time</label>
            <input type="time" id="time" name="time" required />

            <label htmlFor="guests">Number of Guests</label>
            <input type="number" id="guests" name="guests" min="1" max="10" required />

            <button type="submit">Submit</button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className="container">
          <p>&copy; 2024 Little Lemon | All Rights Reserved</p>
        </div>
      </footer>
    </>
  );
}

export default App;
