import React from 'react';
import {todayTable, weekTable} from "../../data/backend";

function Thisweek(props) {
    return (
        <div className={"px-[10%] py-10"}>
            <div className={"border-[#3B3B3B] text-[#858584] border-2 rounded-3xl my-5 p-3 w-full flex justify-start items-center gap-3 "}>
                    <span
                        className={"flex items-center justify-center bg-[#2B2B2B] text-[#858584] py-1 px-3 rounded-full"}>
                        #
                    </span>
                <h3 className="w-[10%] sm:mr-10 md:mr-0">Artist</h3>
                <h3 className="w-[30%] text-start">Name</h3>

                <p className={"text-[#858584] w-[15%] sm:hidden md:block"}>Change</p>
                <p className={"w-[15%] sm:hidden md:block"}>NFTs Sold</p>
                <p className={"w-[15%] sm:hidden md:block"}>Volume</p>
            </div>

            {
                weekTable.map((item, index) => (
                    <div key={index}
                         className={"bg-[#3B3B3B] rounded-3xl my-5 p-3 w-full flex justify-start items-center gap-3 "}>
                             <span
                                 className={"flex items-center justify-center bg-[#2B2B2B] text-[#858584] py-1 px-3 rounded-full"}>
                                    {item.id}
                             </span>
                        <img src={item.avatar} alt={item.name} className={"w-[60px] h-[60px] mx-5"}/>
                        <h3 className="font-bold sm:text-[15px] md:text-[20px] w-[30%] ">
                            {item.name}
                        </h3>

                        <p className={"text-green-500 w-[15%] sm:hidden md:block"}>{item.change}</p>
                        <p className={"w-[15%] sm:hidden md:block"}>{item.sold}</p>
                        <p className={"w-[15%] sm:hidden md:block"}>{item.volume}</p>
                    </div>
                ))
            }
        </div>
    );
}

export default Thisweek;