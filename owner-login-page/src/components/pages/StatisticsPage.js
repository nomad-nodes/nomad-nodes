import React from 'react'
import { Link } from 'react-router-dom'

//import DataUsageImage from '../../assets/images/GlassWire_Data_Usage.webp'
//import FirewallImage from '../../assets/images/GlassWire_Firewall_Software.webp'

import '../../App.css'

export default function StatsPage() {

    return (
        <div>
            <img src = {require('../../assets/images/firewall.png')} alt = "Firewall" width="700" height="630"/>
            <img src = {require('../../assets/images/data_usage.png')} alt = "Data Usage" width="730" height="630"/>
        </div>

    )

}
