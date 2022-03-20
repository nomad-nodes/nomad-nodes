import React from 'react'
import { Link } from 'react-router-dom'

export default function HomePage() {
    return (
        <div className="text-center">
          <Link to = "/wifi-select">
            <h1>Select the Wi-fi you wish to host</h1>
          </Link>
          <Link to = "/statistics">
            <h1> Check the Statistics of your Wi-fi Usage </h1>
          </Link>
          <Link to = "/">
            <h1> Add or Change Existing Wallet </h1>
          </Link>
            <Link to="/">
                <button className="primary-button">Log out</button>
            </Link>
        </div>
    )
}
