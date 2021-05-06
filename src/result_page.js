import React,{useEffect,useState} from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function Result() {
    const[arr,setArr] = useState([]);
    let f=0;

    useEffect(() => {
        loadData();
      }, []);
      
      async function loadData() {
        const response = await fetch("http://localhost:8000/api/getResult");  
      let cards = await response.json();
      setArr(cards);
       }

    return (
      <div>
        <div className="container">
            <h3>Results</h3>
            <div className="row">
            {arr?.map(card=> (
               <div className="col-6" style={{border:"solid silver 1px"}}>
                   <div className="row">
                   <div className="col-2" style={{marginTop:"10px"}}>
                       <img src={card.img1} style={{width:"30px"}}/><br/>
                       <img src={card.img2} style={{width:"30px",marginTop:"50px"}}/>
                   </div>
                   <div className="col-5" style={{marginTop:"15px"}}>
                        <b>{card.club1}</b><br/><br/><br/><br/>
                        <b style={{marginTop:"20px"}}>{card.club2}</b>     
                   </div>
                   <div className="col-2">
                       <br/><br/>
                        <b>{card.result}</b>
                   </div>
                   <div className="col-3">
                   <br/><br/>
                        <p style={{color:"silver"}}>{card.date}</p>
                   </div>
                   </div>
               </div>
               ))}
      </div>
        </div>
          </div>
    );
        

    
}



export default Result;