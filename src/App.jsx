import { useState } from "react";
import "./assets/css/bootstrap.css";
import "./assets/css/styles.css";
import Header from "./Components/Header/Header.jsx";
import AlertSection from "./Components/MainSection/AlertSection.jsx";
import Footer from "./Components/Footer/Footer.jsx";
import SectionOne from "./Components/SectionOne/SectionOne.jsx";
import SectionTwo from "./Components/SectionTwo/SectionTwo.jsx";
import SectionThree from "./Components/SectionThree/SectionThree.jsx";
import SectionFour from "./Components/SectionFour/SectionFour.jsx";
import SectionFive from "./Components/SectionFive/SectionFive.jsx";
import SectionSix from "./Components/SectionSix/SectionSix.jsx";
import YoutubeVideos from "./Components/YoutubeVideos/YoutubeVideos.jsx";
import Mainsection from "./Components/MainSection/Mainsection.jsx";
import { Route, Routes } from "react-router-dom";
import Mac from "./Components/Page/Mac.jsx";
import Iphone from "./Components/Page/Iphone.jsx";
import Ipad from "./Components/Page/Ipad.jsx";
import Watch from "./Components/Page/Watch.jsx";
import Tv from "./Components/Page/Tv.jsx";
import Music from "./Components/Page/Music.jsx";
import Support from "./Components/Page/Support.jsx";
import SharedPage from "./Components/SharedPage/SharedPage.jsx";
import Four04 from "./Components/Page/Four04.jsx";
import Search from "./Components/Page/Search.jsx";
import Cart from "./Components/Page/Cart.jsx";



function App() {
  return (
    <Routes>
      <Route path="/" element={<SharedPage />}> 
        <Route path="/" element={<Mainsection />} />
        <Route path="Mac" element={<Mac />} />
        <Route path="Iphone" element={<Iphone />} />
        <Route path="Ipad" element={<Ipad />} />
        <Route path="Watch" element={<Watch />} />
        <Route path="Tv" element={<Tv />} />
        <Route path="Music" element={<Music />} />
        <Route path="Support" element={<Support />} />
        <Route path="Search" element={<Search />} />
        <Route path="Cart" element={<Cart />} />
        <Route path="*" element={<Four04 />} /> 

      </Route>
    </Routes>
  );
}

export default App;

//
//element takes jsx element={}