import React from 'react';
import Clock from './Clock'; 
import '../Styles/Home.css'

const Home = () => {
  return (
    <section
      id="home"
      className="relative bg-grey text-white text-center overflow-hidden"
    >
      {/* <div className="absolute top-24 right-14">
        <Clock />
      </div> */}

      <img className="dhruv" src="../hackTheChain.png" alt="not available .." />

      <div className="grid-container">
      <div className="text">
            <h1>HACK THE CHAIN</h1>
        </div>
      </div>
    </section>
  );
};

export default Home;