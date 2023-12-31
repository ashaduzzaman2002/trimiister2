import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="dhiwise-navigation">
      <h1>Homepage</h1>
      <p className="headline">
        This project was generated By{" "}
        <a href="https://www.dhiwise.com">Dhiwise</a>. Quickly use below links
        to navigate through all pages.
      </p>
      <ul>
        <li>
          <Link to="/home1">Home1</Link>
        </li>
        <li>
          <Link to="/aboutus">AboutUs</Link>
        </li>
        <li>
          <Link to="/department">Department</Link>
        </li>
        <li>
          <Link to="/hospitality">Hospitality</Link>
        </li>
        <li>
          <Link to="/media">Media</Link>
        </li>
        <li>
          <Link to="/eventsdetails">EventsDetails</Link>
        </li>
        <li>
          <Link to="/contactus">ContactUs</Link>
        </li>
      </ul>
    </div>
  );
};
export default Home;
