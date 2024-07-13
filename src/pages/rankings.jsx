import React, {useState} from 'react';
import Today from "./rankingsPage/today";
import Thisweek from "./rankingsPage/thisweek";
import Thismonth from "./rankingsPage/thismonth";
import Alltime from "./rankingsPage/alltime";
import Footer from "../components/homeComponents/footer";

function Rankings(props) {

    const [today, setToday] = useState(true);
    const [week, setWeek] = useState(false);
    const [month, setMonth] = useState(false);
    const [alltime, setAlltime] = useState(false);

    const todayTrue = () => {
        setToday(true);
        setWeek(false);
        setMonth(false);
        setAlltime(false);
    };
    const weekTrue = () => {
        setToday(false)
        setWeek(true);
        setMonth(false);
        setAlltime(false);
    };
    const monthTrue = () => {
        setToday(false);
        setWeek(false);
        setMonth(true);
        setAlltime(false);
    };
    const alltimeTrue = () => {
        setToday(false);
        setWeek(false);
        setMonth(false);
        setAlltime(true);
    };

    return (
        <div>
            <div className={"p-[10%] py-10"}>
                <h1 className={"font-bold sm:text-[35px] md:text-[40px] lg:text-[45px] xl:text-[45px]"}>
                    Top Creators
                </h1>
                <p className={"text-[20px] my-5"}>
                    Check out top ranking NFT artists on the NFT Marketplace.
                </p>
            </div>

            <div className={"flex justify-center gap-3 mt-3 px-[10%]"}>
                <h1 onClick={todayTrue}
                    className={`my-3 w-[23%] text-center cursor-pointer transition-all sm:text-[12px] md:text-[15px] xl:text-[20px] lg:text-[20px] py-4 hover:border-b-2 
                    ${today ? "border-b-2" : "text-gray-500"}`}>
                    Today
                </h1>
                <h1 onClick={weekTrue}
                    className={`my-3 w-[23%] text-center cursor-pointer transition-all sm:text-[12px] md:text-[15px] xl:text-[20px] lg:text-[20px] py-4 hover:border-b-2
                     ${week ? "border-b-2" : "text-gray-500"}`}>
                    This Week
                </h1>
                <h1 onClick={monthTrue}
                    className={`my-3 w-[23%] text-center cursor-pointer transition-all sm:text-[12px] md:text-[15px] xl:text-[20px] lg:text-[20px] py-4 hover:border-b-2
                     ${month ? "border-b-2" : "text-gray-500"}`}>
                    This Month
                </h1>
                <h1 onClick={alltimeTrue}
                    className={`my-3 w-[23%] text-center cursor-pointer transition-all sm:text-[12px] md:text-[15px] xl:text-[20px] lg:text-[20px] py-4 hover:border-b-2
                     ${alltime ? "border-b-2" : "text-gray-500"}`}>
                    All Time
                </h1>
            </div>

            {
                today ? <Today/> :
                    week ? <Thisweek/> :
                        month ? <Thismonth/> :
                            alltime ? <Alltime/> : ""
            }


            <Footer/>
        </div>
    );
}

export default Rankings;