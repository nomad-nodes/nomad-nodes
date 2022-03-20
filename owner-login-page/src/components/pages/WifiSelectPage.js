import React from 'react'
import { Link } from 'react-router-dom'

import '../../App.css'

export default function WifiSelectPage() {

    return (
        <div className="text-center m-5-auto">
            <h1> This is the SSID you are connected to: <strong>Workstation WB</strong></h1>
            <h2>Please confirm if this is the SSID you wish to host. </h2>
            <h3>If this is not the SSID you wish to host, please establish your computer to connect with the wi-fi name that you wish for your consumers to access.</h3>
            <form action="/home">
                <p>
                    <button id="sub_btn" type="submit">SSID is Correct!</button>
                </p>
            </form>
            <footer>
                <p><Link to="/">Back to Homepage</Link>.</p>
            </footer>
        </div>
    )

}
