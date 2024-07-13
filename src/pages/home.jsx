import React from 'react';
import {MdMailOutline, MdOutlineRocketLaunch} from "react-icons/md";
import cardImage from "../assets/Image Placeholder.png";
import avatar from "../assets/Avatar.png";
import astronaut from "../assets/Photo.png"
import {Button, Input, Space} from "antd";
import logo from "../assets/logo.svg"
import {IoGameControllerOutline} from "react-icons/io5";
import {LuTwitter, LuYoutube} from "react-icons/lu";
import {FaInstagram} from "react-icons/fa";
import TradingCollection from "../components/homeComponents/tradingCollection";
import TopCreators from "../components/homeComponents/topCreators";
import BrowseCategories from "../components/homeComponents/browseCategories";
import DiscoverMore from "../components/homeComponents/discoverMore";
import MagicMushrooms from "../components/homeComponents/magicMushrooms";
import HowItWorks from "../components/homeComponents/howItWorks";
import JoinOur from "../components/homeComponents/joinOur";
import Footer from "../components/homeComponents/footer";

function Home(props) {
    return (
        <div>
            {/* Home page */}
            <div className="flex px-[10%] py-10 flex-wrap">
                <div className={"sm:w-[100%] sm:mb-10 md:w-[50%] lg:w-[50%] xl:w-[50%] md:pr-5 lg:pr-5 xl:pr-5 "}>
                    <h1 className={"sm:text-[40px] lg:text-[60px] leading-[70px] font-[500] "}>Discover digital art &
                        Collect NFTs</h1>
                    <p className={"my-5 "}>NFT marketplace UI created with Anima for Figma. Collect, buy and sell art
                        from more than 20k NFT artists.</p>
                    <button className={"flex items-center gap-3 bg-[#A259FF] py-4 px-5 rounded-[15px] "}>
                        <MdOutlineRocketLaunch/> Get Started
                    </button>
                    <div className={"flex flex-wrap justify-between w-[90%] mt-5 gap-3"}>
                    <span className={""}>
                        <h3 className={"font-bold text-[25px]"}>240k+ </h3>
                        <p className={"text-[20px]"}>Total Sale</p>
                    </span>
                        <span className={""}>
                        <h3 className={"font-bold text-[25px]"}>100k+ </h3>
                        <p className={"text-[20px]"}>Auctions</p>
                    </span>
                        <span className={""}>
                        <h3 className={"font-bold text-[25px]"}>240k+ </h3>
                        <p className={"text-[20px]"}>Artists</p>
                    </span>
                    </div>
                </div>
                <div className={"md:w-[50%] md:pl-5 sm:w-[100%] sm:p-0 lg:w-[50%] lg:pl-5 xl:w-[50%] xl:pl-5"}>
                    <div className="card bg-[#3B3B3B] rounded-[20px]">
                        <img src={cardImage} alt="cardImage" className={"w-full"}/>
                        <div className={"p-5"}>
                            <h3 className={"text-[20px] font-[500]"}>Space Walking</h3>
                            <span className={"flex items-center gap-3 mt-3"}>
                            <img src={avatar} alt="avatar"/>
                            <p>Animakid</p>
                        </span>
                        </div>
                    </div>
                </div>
            </div>
            {/* Trading Collection */}
            <TradingCollection/>

            {/* Top creators */}
            <TopCreators/>

            {/* Browse Categories */}
            <BrowseCategories/>

            {/* Discover More */}
            <DiscoverMore/>

            {/* Magic Mushrooms */}
            <MagicMushrooms/>

            {/* How It Works */}
            <HowItWorks/>

            {/* Join our weekly digest */}
            <JoinOur/>

            {/* Footer */}
            <Footer/>
        </div>
    );
}

export default Home;
