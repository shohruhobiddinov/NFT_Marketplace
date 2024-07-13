import React from 'react';
import avatarSmall from "../../assets/Asset 12 2 (6).png";
import {FaRegEye} from "react-icons/fa6";

function MagicMushrooms(props) {
    const now = new Date();
    const hour = now.getHours();
    const minute = now.getMinutes();
    const second = now.getSeconds();
    return (
        <div>
            {/* Magic Mushrooms */}
            <div className="magicMushrooms relative flex p-[10%] justify-between items-end
            gap-3 flex-wrap sm:px-5 md:px-10 lg:px-[10%] xl:px-[10%]">
                <div>
                    <div className={"flex justify-center py-3 px-5 bg-[#3B3B3B] rounded-3xl gap-3 w-[150px]"}>
                        <img src={avatarSmall} alt="" className={"w-[25px]"}/>
                        <p>Shroomie</p>
                    </div>
                    <h1 className={"font-[600] my-6 sm:text-[35px] md:text-[40px] lg:text-[45px] xl:text-[55px]"}>Magic
                        Mashrooms</h1>
                    <button
                        className={"flex items-center bg-white text-black font-[600] gap-3 py-3 px-5 rounded-[15px] md:mt-5 sm:mt-5"}>
                        <FaRegEye className={"text-[#A259FF]"}/>See NFT
                    </button>
                </div>
                <div>
                    <div className={"bg-[#5B4181] py-5 sm:px-3 md:px-7 lg:px-10 xl:px-10 rounded-2xl"}>
                        <p>Auction ends in:</p>
                        <div className={"flex flex-wrap w-full justify-between items-start"}>
                            <span className={"flex justify-center flex-col"}>
                                <h3 className={"font-bold sm:text-[30px] md:text-[30px] lg:text-[40px] xl:text-[50px]"}>{hour}</h3>
                                <p>Hours</p>
                            </span>
                            <h3 className={"sm:text-[30px] md:text-[30px] lg:text-[40px] xl:text-[50px] font-bold top-0 mx-3"}>:</h3>
                            <span className={"flex justify-center flex-col"}>
                                <h3 className={"sm:text-[30px] md:text-[30px] lg:text-[40px] xl:text-[50px] font-bold"}>{minute < 10 ? `0${minute}` : minute}</h3>
                                <p>Minutes</p>
                            </span>
                            <h3 className={"sm:text-[30px] md:text-[30px] lg:text-[40px] xl:text-[50px] font-bold top-0 mx-3"}>:</h3>
                            <span className={"flex justify-center flex-col"}>
                                <h3 className={"sm:text-[30px] md:text-[30px] lg:text-[40px] xl:text-[50px] font-bold"}>{second}</h3>
                                <p>Seconds</p>
                            </span>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default MagicMushrooms;
