import './App.css';
import PreNavbar from './components/PreNavbar';
import Navbar from './components/Navbar';
import {  BrowserRouter as Router } from "react-router-dom"
import Slider from "./components/Slider.js"
import data from "./data/data.json"
import Offers from './components/Offers';
import Heading from './components/Heading';
import StarProduct from './components/StarProduct';
import HotAccessoriesMenu from './components/HotAccessoriesMenu';
import HotAccessories from './components/HotAccesssories';

function App() {
  return (
    <Router>
       <PreNavbar/>
     <Navbar/>
     <Slider start={data.banner.start}/>
     <Offers offer={data.offer}/>
     <Heading text="STAR PRODUCTS"/>
     <StarProduct starProduct={data.startProduct}/>
     <Heading text="HOT ACCESSORIES"/>
     <HotAccessoriesMenu/>

      
    
     
       <HotAccessories music={data.hotAccessories.music} musicCover={data.hotAccessoriesCover.music}  />
       <HotAccessories smartDevice={data.hotAccessories.smartDevice} smartDeviceCover={data.hotAccessoriesCover.smartDevice}  />

       <HotAccessories home={data.hotAccessories.home} homeCover={data.hotAccessoriesCover.home}  />
      

      
       <HotAccessories lifeStyle={data.hotAccessories.lifeStyle} lifeStyleCover={data.hotAccessoriesCover.lifeStyle}  />
      


       
       <HotAccessories mobileAccessories={data.hotAccessories.mobileAccessories} mobileAccessoriesCover={data.hotAccessoriesCover.mobileAccessories}  />
      
       
    </Router>
  );
}

export default App;
