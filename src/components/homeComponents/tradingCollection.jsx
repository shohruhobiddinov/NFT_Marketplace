import React from 'react';
import {trendingCollection} from "../../data/backend";

function TradingCollection(props) {
    return (
        <div>
            {/* Trending Collection */}
            <div className="flex px-[10%] py-10 flex-wrap">
                <div className={"w-full"}>
                    <h1 className={"sm:text-[35px] md:text-[40px] lg:text-[45px] xl:text-[45px] font-[600] "}>Trending
                        Collection</h1>
                    <p className={"text-[20px]"}>Checkout our weekly updated trending collection.</p>
                </div>
                <div className={"flex flex-wrap justify-between w-full my-10"}>
                    {trendingCollection.map((item, index) => (
                        <div className={"sm:w-full md:w-[48%] lg:w-[48%] xl:w-[31%]"} key={index}>
                            <img src={item.cardImage} alt="trandingCardImage1" className={"w-full"}/>
                            <div className={"py-5"}>
                                <h3 className={"text-[20px] font-[500]"}>{item.topic}</h3>
                                <span className={"flex items-center gap-3 mt-2"}>
                                <img src={item.avatar} alt="avatar"/>
                                <p>{item.name}</p>
                            </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default TradingCollection;
