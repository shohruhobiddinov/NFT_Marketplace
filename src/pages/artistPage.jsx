import React, {useState} from 'react';
import mainAvatar from "../assets/Avatar (5).png";
import {IoGameControllerOutline} from "react-icons/io5";
import {LuTwitter, LuYoutube} from "react-icons/lu";
import {FaInstagram} from "react-icons/fa";
import {PiCopySimpleBold} from "react-icons/pi";
import {FaPlus} from "react-icons/fa6";
import {created, owned, collection} from "../data/backend";
import Created from "./artistPage/created";
import Collection from "./artistPage/collection";
import Owned from "./artistPage/owned";
import Footer from "../components/homeComponents/footer";

function ArtistPage(props) {

    const [nft, setNft] = useState(true);
    const [ownedS, setOwned] = useState(false);
    const [collectionS, setCollection] = useState(false);

    const nftTrue = () => {
        setNft(true)
        setCollection(false)
        setOwned(false)
    };
    const collectionsTrue = () => {
        setCollection(true)
        setNft(false)
        setOwned(false)
    };
    const ownedTrue = () => {
        setOwned(true)
        setNft(false)
        setCollection(false)
    };

    return (
        <div>
            <div className={"w-full relative mainBg sm:h-[40vh] md:h-[40vh] lg:h-[45vh] xl:h-[45vh]"}>
                <img src={mainAvatar} alt="Main avatar"
                     className={"absolute left-[10%] bottom-[-20%]"}
                />
            </div>

            <div
                className={"bg-[#2b2b2b] px-[10%] sm:pt-[15%] md:pt-[15%] lg:pt-[10%] flex flex-wrap justify-between items-start"}>
                <div className={"sm:w-[100%] md:w-[50%] "}>
                    <h1 className={"sm:text-[35px] md:text-[40px] lg:text-[45px] xl:text-[45px] font-[600]"}>
                        Animakid
                    </h1>
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
                    <div className={"my-[5%]"}>
                        <p className={"text-[20px] text-[#858584]  font-bold"}>Bio</p>
                        <p className={"text-[20px]"}>The internet's friendliest designer kid.</p>
                    </div>
                    <div className={"my-[5%] text-[#858584]"}>
                        <p className={"text-[20px] font-bold"}>Links</p>
                        <span className={"text-[#858584] flex w-full gap-5 mt-5"}>
                        <a href="https://www.nft.com/" target={"_blank"}>
                            <IoGameControllerOutline
                                className={"w-[22px] h-[22px] cursor-pointer transition-all hover:scale-105"}/>
                        </a>
                        <a href="https://www.youtube.com/" target={"_blank"}>
                            <LuYoutube className={"w-[22px] h-[22px] cursor-pointer transition-all hover:scale-105"}/>
                        </a>
                        <a href="https://www.instagram.com/" target={"_blank"}>
                            <LuTwitter className={"w-[22px] h-[22px] cursor-pointer transition-all hover:scale-105"}/>
                        </a>
                        <a href="https://www.x.com/" target={"_blank"}>
                            <FaInstagram className={"w-[22px] h-[22px] cursor-pointer transition-all hover:scale-105"}/>
                        </a>
                    </span>
                    </div>
                </div>

                <div
                    className={"sm:w-[100%] md:w-[50%] sm:mb-10 md:mb-0 sm:pl-0 md:pl-[10%] flex flex-wrap pt-3 gap-5 mt-2"}>
                    <button className={"flex items-center gap-3 bg-[#A259FF] py-4 px-5 rounded-[15px] "}>
                        <PiCopySimpleBold/> 0xc0E3...B79C
                    </button>
                    <button
                        className={"flex items-center gap-3 bg-transparent py-4 px-5 rounded-[15px] border-[#A259FF] border-2 text-[#A259FF] "}>
                        <FaPlus/> Follow
                    </button>
                </div>
            </div>

            <div className={"w-full h-[2px] bg-[#3B3B3B]"}></div>

            <div className={"flex justify-center gap-[10%] mt-3 px-[10%]"}>
                <h1 onClick={nftTrue}
                    className={`w-[30%] text-center cursor-pointer transition-all text-[20px] py-4 hover:border-b-2 flex items-center justify-center
                    ${nft ? "border-b-2" : "text-gray-500"}`}>
                    Created <span
                    className={`${nft ? "bg-[#858584] text-white py-2 px-3 mx-3 rounded-2xl" : "bg-[#3B3B3B] text-white py-2 px-3 mx-3 rounded-2xl"} sm:hidden md:block`}>
                    {created.length}
                </span>
                </h1>
                <h1 onClick={ownedTrue}
                    className={`w-[30%] text-center cursor-pointer transition-all text-[20px] py-4 hover:border-b-2 flex items-center justify-center
                     ${ownedS ? "border-b-2" : "text-gray-500"}`}>
                    Owned <span
                    className={`${ownedS ? "bg-[#858584] text-white py-2 px-3 mx-3 rounded-2xl" : "bg-[#3B3B3B] text-white py-2 px-3 mx-3 rounded-2xl"} sm:hidden md:block`}>
                    {owned.length}
                </span>
                </h1>
                <h1 onClick={collectionsTrue}
                    className={`w-[30%] text-center cursor-pointer transition-all text-[20px] py-4 hover:border-b-2 flex items-center justify-center
                     ${collectionS ? "border-b-2" : "text-gray-500"}`}>
                    Collection <span
                    className={`${collectionS ? "bg-[#858584] text-white py-2 px-3 mx-3 rounded-2xl" : "bg-[#3B3B3B] text-white py-2 px-3 mx-3 rounded-2xl"} sm:hidden md:block`}>
                    {collection.length}
                </span>
                </h1>
            </div>
            {
                nft ? <Created/> :
                    collectionS ? <Collection/> :
                        ownedS ? <Owned/> : ""

            }

            <div className={"w-full h-[2px] bg-[#2B2B2B]"}></div>

            <Footer/>
        </div>
    );
}

export default ArtistPage;

