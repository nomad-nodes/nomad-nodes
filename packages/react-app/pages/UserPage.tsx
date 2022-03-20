import { Card, CardContent, CardHeader } from "@mui/material";
import { flexbox } from "@mui/system";
const getWifiStrength = getRandomIntFactory(1, 6);
const wifis = [
  {
    name: 'dorothy_wifi',
    strength: getWifiStrength()
  },
  {
    name: 'yellow_brick_road_wifi',
    strength: getWifiStrength()
  },
  {
    name: 'dropped_house_wifi',
    strength: getWifiStrength()
  }
];

const oneBar = (width, height, isFilled = false) => {
  return (<div style={{
    width,
    height: `${10 * height}px`,
    border: '1px solid black',
    background: `${isFilled ? 'black' : 'unset'}`
  }}
  ></div>)
}
const FilledBar = ({ numFilled, numMax, width, oneBar }) => {
  let counter = numFilled
  const bars = Array(numMax).fill(null).map((item, idx) => {
    counter--;
    console.log(counter);
    const isFilled = (counter > -1) === true
    return () => oneBar(width / numMax, idx, isFilled)
  })
  return <div style={{ display: 'flex' }}>
    {bars.map((Barcmp) => Barcmp())}
  </div>
}
function WifiCard({ name, strength }) {
  return (<Card sx={{ width: "50%", minWidth: '384px' }}>
    <CardHeader title={name} />
    <CardContent>
      {strength}
      <FilledBar numFilled={strength} numMax={5} width={100} oneBar={oneBar} />
    </CardContent>
  </Card>)
}
export default function UserPage() {
  return <ul style={{
    listStyleType: "none",
    display: "flex",
    flexDirection: "column"
  }}>
    {
      wifis.map(({ name, strength }) => {
        return (<li style={{ marginTop: ".2em" }}>
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

