import React, { useEffect, useState } from "react";
import Fb from '../images/icon-facebook.svg';
import Ist from '../images/icon-instagram.svg';
import Pin from "../images/icon-pinterest.svg";
import './Timer.css';

const Timer=()=>{
    const[time,setTime]=useState();
    
    setInterval(() => {
        tick();
    }, 1000);

    const tick=()=>{
        setTime({
            date:new Date().getDate(),
            hours:new Date().getHours(),
            minutes:new Date().getMinutes(),
            seconds:new Date().getSeconds()
        });
    }

    useEffect(()=>{
        return (()=>{
            setTime(null);
        })
    },[]);

    let days;
    let m=new Date().getMonth+1;
    
    if(m===2){
        days=30;
    }else if(m === 1 || m === 3 || m === 5 || m === 7 || m === 8 || m === 10 || m === 12){
        days=32;
    }else{
        days=31;
    }

    let display;
    if(time){
    display=(<div className="timer" >
            <h1>WE'RE LAUNCHING SOON</h1>
            <div className="table" >
            <div className="blocks"><h1 className="timerH1" >{`${days-time.date}`}</h1><p>DAYS</p></div>
            <div className="blocks"><h1 className="timerH1" >{`${23-time.hours}`}</h1><p>HOURS</p></div>
            <div className="blocks"><h1 className="timerH1" >{`${59-time.minutes}`}</h1><p>MINUTES</p></div>
            <div className="blocks"><h1 className="timerH1" >{`${59-time.seconds}`}</h1><p>SECONDS</p></div>
            </div>
            </div>
            )}
 
        return(<React.Fragment>
        {display}
        <footer>
            <a href="https://www.facebook.com" ><img src={Fb} /></a>
            <a href="https://www.instagram.com"> <img src={Ist} /></a>
            <a href="https://www.pintrest.com" ><img src={Pin} /></a>
        </footer>
        </React.Fragment>   
        )
}

export default Timer;