import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import "../Styles/Home.css";
import Logo from "../assets/logo.png";

const dummyData = [
  {
    id: 1,
    image: Logo,
    title: "Title 1",
    description: "Description 1",
    label: "Label 1",
  },
  {
    id: 2,
    image: Logo,
    title: "Title 2",
    description: "Description 2",
    label: "Label 2",
  },
  {
    id: 3,
    image: Logo,
    title: "Title 3",
    description: "Description 3",
    label: "Label 3",
  },
];

function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={Logo} alt="logo" />
        <nav>
          <Link to="/login">Login</Link> | <Link to="/register">Register</Link>
        </nav>
      </header>

      <div className="CardContainer">
        {dummyData.map((item) => (
          <div key={item.id} className="Card">
            <img src={item.image} alt={item.title} />
            <h2>{item.title}</h2>
            <p>{item.description}</p>
            <span className="label">{item.label}</span>
          </div>
        ))}
      </div>

      <footer>
        <p>&copy; 2024 LabelEase. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Home;
