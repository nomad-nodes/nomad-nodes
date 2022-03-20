/* eslint-disable jsx-a11y/iframe-has-title */
import React from 'react';
// import { Link } from 'react-router-dom'

//import DataUsageImage from '../../assets/images/GlassWire_Data_Usage.webp'
//import FirewallImage from '../../assets/images/GlassWire_Firewall_Software.webp'

import '../../App.css';

export default function StatsPage() {
  return (
    <div style={{ height: '100vh' }}>
      <iframe
        width="100%"
        height="100%"
        title="stats"
        src="http://localhost:4000"
      />
      {/* <img src = {require('../../assets/images/firewall.png')} alt = "Firewall" width="700" height="630"/> */}
      {/* <img src = {require('../../assets/images/data_usage.png')} alt = "Data Usage" width="730" height="630"/> */}
    </div>
  );
}
