import React from 'react';
import Card from './components/Card/Card'
import './App.css'
import Data from './data/houseData.json'

export default function App() {

  const [loc, setLoc] = React.useState(null);
  const [lowerRange, setLow] = React.useState(null);
  const [UpperRange, setHigh] = React.useState(null);
  const [houseType, setType] = React.useState(null);
  const [movein, setMove] = React.useState(null);

  const [popular, setPop] = React.useState(Data.filter(data => data.popularity))
  const [normalData, setData] = React.useState(Data.filter(data => !data.popularity))

  // const newData = () => { 

  // }

  return (
    <div className="container">
      <div className="filter"></div>
      <div className="searchResult">
        {popular.map((data => <Card obj = {data}/>))}
        {normalData.map((data => <Card obj = {data}/>))}
      </div>
    </div>
  )
}
