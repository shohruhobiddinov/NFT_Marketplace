import React from 'react';
import {FaRegEye} from "react-icons/fa6";
import {discoverMore} from "../../data/backend";
import {Link} from "react-router-dom";

function DiscoverMore(props) {
    return (
        <div>
            {/* Discover More */}
            <div className={"px-[10%] py-10"}>
                <div
                    className={"flex items-center justify-between xl:flex-row lg:flex-row md:flex-col md:items-start sm:flex-col sm:items-start"}>
                    <div>
                        <h1 className={"sm:text-[35px] md:text-[40px] lg:text-[45px] xl:text-[45px] font-[600]"}>Discover
                            More NFTs</h1>
                        <p className={"text-[20px]"}>Explore new trending NFTs</p>
                    </div>
                    <div>
                        <Link to={"artistPage"}>
                            <button
                                className={"flex items-center gap-3 border-[#A259FF] border-2 py-3 px-5 rounded-[15px] md:mt-5 sm:mt-5"}>
                                <FaRegEye className={"text-[#A259FF]"}/>See All
                            </button>
                        </Link>
                    </div>
                </div>

                <div className={"flex flex-wrap justify-between w-full my-10"}>
                    {
                        discoverMore.map((item, index) => (
                            <div
                                className={"bg-[#3B3B3B] my-3 rounded-[20px] transition-all hover:-translate-y-1.5 sm:w-full md:w-[48%] lg:w-[48%] xl:w-[31%]"}
                                key={index}>
                                <img src={item.discoverImage} alt={item.topic} className={"w-full"}/>
                                <div className={'py-3 px-5'}>
                                    <h3 className={"my-1 font-[600] text-[22px]"}>{item.topic}</h3>
                                    <span className="flex items-center gap-3">
                                        <img src={item.avatar} alt={item.name} className={"w-[25px]"}/>
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

export default DiscoverMore;