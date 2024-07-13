import React from 'react';
import {FaArrowRightLong} from "react-icons/fa6";
import {Link} from "react-router-dom";
import {thisArtist} from "../data/backend";

function ThisArtist(props) {
    return (
        <div className={"px-[10%] pb-10"}>
            <div className={"flex flex-wrap items-center justify-between"}>
                <h1 className={"capitalize sm:text-[35px] md:text-[40px] lg:text-[45px] xl:text-[45px] font-[600]"}>
                    More from this artist
                </h1>
                <Link to={"/artistPage"}>
                    <button
                        className={"flex items-center gap-3 border-[#A259FF] border-2 py-4 px-5 rounded-[15px] md:mt-5 sm:mt-5"}>
                        <FaArrowRightLong className={"text-[#A259FF]"}/>Go To Artist Page
                    </button>
                </Link>
            </div>
            <div >
                <div className={"flex flex-wrap justify-between w-full my-10"}>
                    {
                        thisArtist.map((item, index) => (
                            <div key={index}
                                 className={"bg-[#3B3B3B] my-4 rounded-[20px] transition-all hover:-translate-y-1.5 sm:w-full md:w-[48%] lg:w-[48%] xl:w-[31%]"}>
                                <img src={item.image} alt={item.title} className={"w-full"}/>
                                <div className={'py-3 px-5'}>
                                    <h3 className={"my-1 font-[600] text-[22px]"}>{item.title}</h3>
                                    <span className="flex items-center gap-3">
                                        <img src={item.nftAvatar} alt={item.title} className={"w-[25px]"}/>
                                        <p className={"text-[14px]"}>{item.name}</p>
                                    </span>
                                    <div className={"flex justify-between items-center gap-3 my-3"}>
                                        <span className={"text-start"}>
                                            <p className={"text-gray-400"}>Price</p>
                                            <p>{item.price}</p>
                                        </span>
                                        <span className={"text-end"}>
                                            <p className={"text-gray-400"}>Highest Bid</p>
                                            <p>{item.highestBid}</p>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
}

export default ThisArtist;