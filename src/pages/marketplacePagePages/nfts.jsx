import React from 'react';
import {nfts} from "../../data/backend";

function Nfts(props) {
    return (
        <div>
            <div className={"px-[10%] py-10 bg-[#3B3B3B]"}>
                <div className={"flex flex-wrap justify-between w-full my-10"}>
                    {
                        nfts.map((item, index) => (
                            <div key={index}
                                 className={"bg-[#2B2B2B] my-3 rounded-[20px] transition-all hover:-translate-y-1.5 sm:w-full md:w-[48%] lg:w-[48%] xl:w-[31%]"}>
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

export default Nfts;
