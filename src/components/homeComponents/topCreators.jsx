import React from 'react';
import {MdOutlineRocketLaunch} from "react-icons/md";
import {topCreators} from "../../data/backend";

function TopCreators(props) {
    return (
        <div>
            {/* Top creators */}
            <div className={"px-[10%] py-10"}>
                <div
                    className={"flex items-center justify-between xl:flex-row lg:flex-row md:flex-col md:items-start sm:flex-col sm:items-start"}>
                    <div>
                        <h1 className={"sm:text-[35px] md:text-[40px] lg:text-[45px] xl:text-[45px] font-[600]"}>Top
                            creators</h1>
                        <p className={"text-[20px]"}>Checkout Top Rated Creators on the NFT Marketplace</p>
                    </div>
                    <div>
                        <button
                            className={"flex items-center gap-3 border-[#A259FF] border-2 py-4 px-5 rounded-[15px] md:mt-5 sm:mt-5"}>
                            <MdOutlineRocketLaunch className={"text-[#A259FF]"}/>View Rankings
                        </button>
                    </div>
                </div>
                <div className={"flex justify-between flex-wrap my-10"}>
                    {topCreators.map((item, index) => (
                        <div
                            className={"bg-[#3B3B3B] rounded-[20px] p-5 my-4 text-center relative transition-all hover:-translate-y-1.5 xl:w-[23%] lg:w-[31%] md:w-[48%] sm:w-full"}>
                            <img src={item.image} alt={item.name} className={"mx-auto"}/>
                            <h3 className={"my-3 font-[600]"}>{item.name}</h3>
                            <span className={"flex items-center gap-2 justify-center"}>
                                <p className={"text-gray-400"}>Top Sales:</p>
                                <p>{item.sales}</p>
                            </span>
                            <span
                                className={"absolute px-3 py-1 rounded-full top-3 left-3 bg-[#2B2B2B] text-[#858584]"}>{item.id}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default TopCreators;
