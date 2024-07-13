import React from 'react';
import Navbar from "./components/navbar";
import {Route, Routes} from "react-router-dom";
import Marketplace from "./pages/marketplace";
import Rankings from "./pages/rankings";
import ConnectWallet from "./pages/connectWallet";
import Signup from "./pages/signup";
import Home from "./pages/home";
import ArtistPage from "./pages/artistPage";

function App(props) {
    return (
        <div className={"bg-[#2B2B2B] w-full text-white font-work_sans"}>
            <Navbar/>
            <Routes>
                <Route path={"/"} element={<Home/>}/>
                <Route path={"/marketplace"} element={<Marketplace/>}/>
                <Route path={"/rankings"} element={<Rankings/>}/>
                <Route path={"/connectWallet"} element={<ConnectWallet/>}/>
                <Route path={"/signup"} element={<Signup/>}/>
                <Route path={"/artistPage"} element={<ArtistPage />}/>
            </Routes>
        </div>
    );
}

export default App;
