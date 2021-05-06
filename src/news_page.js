import React,{useEffect,useState} from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function News() {
    const[arr,setArr] = useState([]);
    let f=0;

    useEffect(() => {
        loadData();
      }, []);
      
      async function loadData() {
        const response = await fetch("http://localhost:8000/api/getNews");  
      let cards = await response.json();
      setArr(cards);
       }

    return (
      <div>
        <div className="container">
        <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://liga-online.ru/system/domains/main_hero_images/000/000/001/desktop/1680_Slider_Soocer.png?1589266576" class="d-block w-100" style={{height:"400px"}} alt="..."/>
      <div class="carousel-caption d-none d-md-block">
      </div>
    </div>
    <div class="carousel-item">
      <img src="https://www.fairobserver.com/wp-content/uploads/2019/10/FT-slider.jpg" class="d-block w-100" style={{height:"400px"}} alt="..."/>
      <div class="carousel-caption d-none d-md-block">
      </div>
    </div>
    <div class="carousel-item">
      <img src="https://blog.rockthetraveller.com/wp-content/uploads/2017/11/Los-estadios-de-f%C3%BAtbol-m%C3%A1s-incre%C3%ADbles-del-planeta-slider.jpg" class="d-block w-100" style={{height:"400px"}} alt="..."/>
      <div class="carousel-caption d-none d-md-block">
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
        </div>
        <div className="container mt-3">
          <h3>Newses</h3>
            <div className="row">
            {arr?.map(card=> (
                <div className="col-3 mt-3">
        <div class="card" style={{width: "300px",height:"400px"}}>
        <img src={card.url} style={{width:"300px",height:"250px"}} class="card-img-top" alt="..."/>
        <div class="card-body">
          <h5 class="card-title">{card.name}</h5>
          <a href="#" style={{marginTop:"15px"}}  class="btn btn-dark">Подробнее</a>
        </div>
        
      </div></div> ))}
      </div>
        </div>
          </div>
    );
        

    
}



export default News;