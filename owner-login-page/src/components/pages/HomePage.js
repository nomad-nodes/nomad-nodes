import React from 'react';
import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <div className="text-center">
      <Link to="/wifi-select">
        <h1>Select the WiFi you wish to host</h1>
        <hr></hr>
      </Link>
      <Link to="/statistics">
        <h1> Staking </h1>
        <hr></hr>
      </Link>
      <Link to="/wallet">
        <h1> Wallet Balance </h1>
        <hr></hr>
      </Link>
      <Link to="/">
        <button className="primary-button">Log out</button>
      </Link>
    </div>
  );
}
