import React from 'react';
import 'styled-components';
import {Link} from 'react-router-dom';
import {Card} from 'react-bootstrap';
import './card.css';


const Cards = () => {

  const cardInfo = [
    {image:"/dataImages/adedotun-adegborioye-ovZOUI3nGZg-unsplash.jpg", name: "The Java Five", category: "Music", date: "03-15-21 "},
    {image:"/dataImages/dance.jpg", name: "Rotaru International Ballet", category: "Dance", date: "03-17-21"},
    {image:"/dataImages/fabian-friedrich-Ag3cbIe7H3o-unsplash.jpg", name: "Axios Dance Theater", category: "Dance", date: "03-18-21 "},
    {image:"/dataImages/michael-walk-YcIWrPutvzU-unsplash.jpg", name: "Cal", category: "Comedy", date: "03-20-21 "},
    {image:"/dataImages/phil-hearing-gcAc8X9Iecc-unsplash.jpg", name: "Python:Lecture", category: "lecture", date: "03-21-21 "},
    {image:"/dataImages/michel-grolet-NBRNK4XC1k8-unsplash.jpg", name: "Ruby", category: "Comedy", date: "03-22-21 "},
    {image:"/dataImages/sam-moqadam-9sfPj0QzOEU-unsplash.jpg", name: "Tres Algos", category: "Music", date: "03-23-21"},
    {image:"/dataImages/sam-moqadam-rVZ-LfGYo48-unsplash.jpg", name: "LISA", category: "Comedy", date: "03-24-21"},
    {image:"/dataImages/yiranding-vtZqNeV_dlA-unsplash.jpg", name: "Express Dance", category: "Dance", date: "03-25-21"},
    {image:"/dataImages/gama-films--ZnbHII-kss-unsplash.jpg", name: "Ada Swift", category: "Music", date: "03-26-21"},
    {image:"/dataImages/reimond-de-zuniga-vHwjDFwQC-M-unsplash.jpg", name: "Cecil Kotlin", category: "Lecture", date: "03-27-21"},
    {image:"/dataImages/rochelle-brown-P-K0CNvhBoI-unsplash.jpg", name: "Idris", category: "Performer", date: "03-28-21"}
  ]

  const renderCard = (card, index) =>{
    return(
      
      <Card style={{ width: '22rem' }} key={index} className="box">
      
      <Card.Img variant="top" src={card.image} />
      <Card.Body>{card.date}
      <Card.Title>{card.name}</Card.Title>
      <Card.Text>
        
        {card.category}
      </Card.Text>
      <Link to="/events"><button className="cardbtn">Buy Tickets</button></Link>
      </Card.Body>
      </Card>
    

    )
  }

  return (
    <div className="grid">
      {cardInfo.map(renderCard)}
    </div>



  )
}

export default Cards;