
import { Box } from '@mui/material';
import './App.css';
import Audit from './components/Audit';
import DefiCompo from './components/DefiCompo';
import SmartContract from './components/SmartContract';
import WeProvide from './components/WeProvide';
import dots from "./images/dots.png"

function App() {
  return (
    <div className="">
      <div id='dotImg'>
        <img src={dots} className="imgOfDot" alt="" />
        <div></div>
      </div>
      <WeProvide/>
      <DefiCompo/>
      <Audit/>
      <SmartContract/>
    </div>
  );
}

export default App;
