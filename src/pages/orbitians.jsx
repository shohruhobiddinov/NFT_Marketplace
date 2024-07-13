import React, {useEffect, useState} from 'react';
import galaxy from "../assets/Image PlaceHolder (9).png"
import avatar from "../assets/Asset 12 2 (11).png"
import {Button} from "antd";
import {IoGlobeOutline} from "react-icons/io5";
import {LuGlobe2} from "react-icons/lu";
import Footer from "../components/homeComponents/footer";
import ThisArtist from "./thisArtist";

function Orbitians(props) {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const hour = time.getHours();
    const minute = time.getMinutes();
    const second = time.getSeconds();
    return (
        <div>
            <div className={"w-full"}>
                <img src={galaxy} alt="galaxy" className={"w-full"}/>
            </div>
            <div className={"p-[10%] flex flex-wrap items-start justify-between"}>
                <div className={"sm:w-full md:w-full lg:w-[60%]"}>
                    <h1 className={"sm:text-[35px] md:text-[40px] lg:text-[45px] xl:text-[45px] font-[600]"}>The
                        Orbitians</h1>
                    <p className={"text-[22px] text-[#858584]"}>Minted on Sep 30, 2022</p>
                    <p className={"text-[20px] text-[#858584] font-bold mt-7"}>Created By</p>
                    <span className={"flex items-center gap-3 my-3"}>
                        <img src={avatar} alt="avatar"/>
                        Orbitian
                    </span>

                    <p className={"text-[20px] text-[#858584] font-bold mt-7"}>Description</p>
                    <p className={"mt-5 text-[20px]"}>The Orbitians,</p>
                    <p className={"mt-5 text-[20px]"}>is a collection of 10,000 unique NFTs on the Ethereum
                        blockchain,</p>
                    <p className={"mt-5 text-[20px]"}>There are all sorts of beings in the NFT Universe. The most
                        advanced and
                        friendly of the bunch are Orbitians</p>
                    <p className={"mt-5 text-[20px]"}>These Orbitians are a peaceful race, but they have been at war
                        with a group of
                        invaders for many generations. The invaders are called Upside-Downs, because of their inverted
                        bodies that live on the ground, yet do not know any other way to be. Upside-Downs believe that
                        they will be able to win this war if they could only get an eye into Orbitian territory, so
                        they've taken to make human beings their target.</p>

                    <p className={"text-[20px] text-[#858584] font-bold mt-7"}>Details</p>
                    <span className={"flex items-center gap-3 my-3 cursor-pointer"}>
                        <IoGlobeOutline className={"text-[20px]"}/>
                        View on Etherscan
                    </span>
                    <span className={"flex items-center gap-3 my-3 cursor-pointer"}>
                        <LuGlobe2 className={"text-[20px]"}/>
                        View Original
                    </span>

                    <p className={"text-[20px] text-[#858584] font-bold mt-7"}>Tags</p>
                    <div className={"flex gap-3 my-3 flex-wrap"}>
                        <h3 className={"bg-[#3B3B3B] rounded-2xl px-5 py-2 cursor-pointer uppercase transition-all hover:scale-105"}>
                            Animation
                        </h3>
                        <h3 className={"bg-[#3B3B3B] rounded-2xl px-5 py-2 cursor-pointer uppercase transition-all hover:scale-105"}>
                            illustration
                        </h3>
                        <h3 className={"bg-[#3B3B3B] rounded-2xl px-5 py-2 cursor-pointer uppercase transition-all hover:scale-105"}>
                            moon
                        </h3>
                        <h3 className={"bg-[#3B3B3B] rounded-2xl px-5 py-2 cursor-pointer uppercase transition-all hover:scale-105"}>
                            earth
                        </h3>
                    </div>
                </div>
                <div className="sm:w-full md:w-full lg:w-[40%] sm:mt-5 md:mt-5 lg:mt-0">
                    <div className={"bg-[#3B3B3B] py-5 sm:px-3 md:px-7 lg:px-10 xl:px-10 rounded-2xl"}>
                        <div className={"flex flex-wrap w-full justify-center items-start gap-3"}>
                            <span className={"flex justify-center flex-col"}>
                                <h3 className={"font-bold sm:text-[30px] md:text-[30px] lg:text-[40px]"}>{hour}</h3>
                                <p>Hours</p>
                            </span>
                            <h3 className={"sm:text-[30px] md:text-[30px] lg:text-[40px] font-bold top-0 mx-3"}>:</h3>
                            <span className={"flex justify-center flex-col"}>
                                <h3 className={"sm:text-[30px] md:text-[30px] lg:text-[40px] font-bold"}>{minute < 10 ? `0${minute}` : minute}</h3>
                                <p>Minutes</p>
                            </span>
                            <h3 className={"sm:text-[30px] md:text-[30px] lg:text-[40px] font-bold top-0 mx-3"}>:</h3>
                            <span className={"flex justify-center flex-col"}>
                                <h3 className={"sm:text-[30px] md:text-[30px] lg:text-[40px] font-bold"}>{second < 10 ? `0${second}` : second}</h3>
                                <p>Seconds</p>
                            </span>
                        </div>
                        <Button type={"dashed"}
                            className={"bg-[#A259FF] text-white w-full rounded-2xl py-6 text-[18px] font-bold border-none mt-3"}>
                            Place Bid
                        </Button>
                    </div>
                </div>
            </div>

            <ThisArtist/>
            <Footer/>
        </div>
    );
}

export default Orbitians;
