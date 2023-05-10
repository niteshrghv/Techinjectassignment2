import React from 'react'
import './Ems.css'
import { useState} from 'react';
import data from '../Data/data.json'


function Nitesh()
{  const [i,setI]=useState(0);
   const inconclusive= data[i].dates[1].inconclusive;
   const incomplete=data[i].dates[1].incomplete;
   const punch_in=data[i].dates[1].inTime;
   const ph=data[i].dates[1].PHONE;
   const name=data[i].dates[1].NAME;
   const ID=data[i].dates[1].ID;
   const lunch_out= data[i].dates[1].deductions[1].outTime;
   const lunch_in= data[i].dates[1].deductions[1].inTime;
   const out_time=data[i].dates[1].outTime;
   const deductions=data[i].dates[1].deductions[1].deduction;
   const exceptions=data[i].dates[1].deductions[1].deduction;
   const presnt_time= data[i].dates[1].present;
   const absent_time=data[i].dates[1].absent;
   const src=data[i].dates[1].src;

   let status="";
   if(inconclusive===true){status="Inconclusive"};
   if(incomplete===true){status="Incomplete"};
   if(incomplete===false && inconclusive===false){status="Present"};



   

    const isRed=true;
    const c=isRed ? "timeline-item" : "timeline1-item";
    const g=!isRed ? "timeline-item" : "timeline1-item";
    const current = new Date();
    const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
    const day=current.getDay();
    let daydata="";
    if(day===0){daydata="Sunday"}
    if(day===1){daydata="Monday"}
    if(day===2){daydata="Tuesday"}
    if(day===3){daydata="Wednesday"}
    if(day===4){daydata="Thursday"}
    if(day===5){daydata="Friday"}
    if(day===6){daydata="Saturday"}
    function dec(){
        if(i===0){setI(3)}
        else{setI(i-1)}}
    function inc(){
        if(i===3){setI(0)}
        else{setI(i+1)}}
    
    return(
        <>
      <div id="main">
        <div id="first">
            <div id="first1">
                   <div id="center">EMS</div>
                   <div id="buttonprevnext">
                   <div id="buttonprev"><button id='roundbutton' onClick={dec} >&lt;</button></div>
                   <div id="buttonnext"><button id='roundbutton' onClick={inc}>&gt;</button></div>
                   </div>
            </div>
            <div id="first2">
                <div><img src={require(`../images${src}`)} height={200} width={200} alt="photos" id="roundimg" /></div>
            </div>
            <div id="first3">
                <div><h3>Name : {name}</h3></div>
                <div><h3>ID : {ID}</h3></div>
                <div><h3>Phone No : {ph}</h3></div>
                </div>
            <div id="first4">
                <p>Day:  {daydata} </p>
                <p>Date:  {date}</p>
            </div>
        </div>
        <div id="second">
            <div id="second1">
                <div id="second11">Timeline</div>
  <div id="second12">
       <div className= 'timeline'>
        
		<div className={c}>
			<div className="timeline-content">
				<div className="timeline-date">Punch in </div>
				<div className="timeline-description">{punch_in}</div>
			</div>
            </div>  <br/>
            <div className={g}>
            <div className="timeline-content">
				<div className="timeline-date"> Lunch Out </div>
				<div className="timeline-description">{lunch_out}</div>
			</div></div>  <br/>
            <div className={c}>
            <div className="timeline-content">
				<div className="timeline-date"> Lunch In </div>
				<div className="timeline-description">{lunch_in}</div>
			</div>
		</div>  <br/>
        <div className={g}>
            <div className="timeline-content">
				<div className="timeline-date"> Out Time </div>
				<div className="timeline-description">{out_time}</div>
			</div>
		</div>  <br/>
        
		
        
        </div>
      
        

    </div>
            </div>
            <div id="second2">
                <div id="second21">
                    <div id='second211'>Day Details</div>
                    <div id="second212">
                        <br/>
                        <p>Total Present Time: {presnt_time}</p>
                        <p>Total Absent Time: {absent_time}</p>
                        <p>Total Exemption: 00:0{exceptions}</p>
                        <p>Total Deduction: 00:0{deductions}</p>
                    </div>
                </div>
                <div id="second22">Status : {status}</div>
            </div>
        </div>
      </div>
        </>
    )
}

export default Nitesh;