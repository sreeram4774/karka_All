import React from "react";
import { useParams } from "react-router-dom";

const About = () => {
  const { id } = useParams();

  return (
    <div>
      <h2>About Page</h2>
      <p>Showing details for product ID: {id}</p>
    </div>
  );
};

export default About;
