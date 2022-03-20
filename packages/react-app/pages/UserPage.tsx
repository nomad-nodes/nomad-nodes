import { Card, CardContent, CardHeader } from "@mui/material";
const getWifiStrength = getRandomIntFactory(1,6);
const wifis = [
  {
    name:'mariowifi',
    strength: getWifiStrength()
  },
  {
    name:'jasonwifi',
    strength: getWifiStrength()
  },
  {
    name:'jimWifi',
    strength: getWifiStrength()
  }
];
function WifiCard({name, strength}) {
  return (<Card sx={{ width: "50%", minWidth: '384px' }}>
      <CardHeader title={name} />
      <CardContent>
        {strength}
      </CardContent>
  </Card>)
}
export default function UserPage() {
  return <ul style={{
    listStyleType: "none",
    display: "flex",
    flexDirection:"column"
  }}>
    {
      wifis.map(({name,strength}) => {
        return (<li style={{marginTop: ".2em"}}>
         <WifiCard name={name} strength={strength} />
        </li>)
      })
    }
  </ul>
}

function getRandomIntFactory(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return () => Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

