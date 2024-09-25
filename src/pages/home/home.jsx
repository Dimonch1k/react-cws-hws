import React, { useEffect } from "react";
import "../../styles/pages/home/home.scss";

const Home = () => {
  const getPosts = async () => {
    const response = await fetch("http://127.0.0.1:4000/api/posts");
    const data = await response.json();
    console.log(data);
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div>
      <h1 className="title">
        Hello User <br />
        You are at the HOME page
      </h1>
    </div>
  );
};

export default Home;
