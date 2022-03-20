import { Card, CardContent, CardHeader } from "@mui/material";

const wifis = [
  {
    name:'mariowifi',
    strength: createRandomNo()
  },
  {
    name:'jasonwifi',
    strength: createRandomNo()
  },
  {
    name:'jimWifi',
    strength: createRandomNo()
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

function createRandomNo() {
  return 5
}

