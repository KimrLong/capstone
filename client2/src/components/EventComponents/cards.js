import React from 'react';
import 'styled-components';
import {Card, Button} from 'react-bootstrap';
import './card.css';


const Cards = () => {

  const cardInfo = [
    {image:"../public/dataImages/adedotun-adegborioye-ovZOUI3nGZg-unsplash.jpg", name: "Trying things out", category: "Test", date: "03-15-21"},
    {image:"../public/dataImages/adedotun-adegborioye-ovZOUI3nGZg-unsplash.jpg", name: "Trying things out", category: "Test", date: "03-15-21"},
    {image:"../public/dataImages/adedotun-adegborioye-ovZOUI3nGZg-unsplash.jpg", name: "Trying things out", category: "Test", date: "03-15-21"},
    {image:"/public/dataImages/adedotun-adegborioye-ovZOUI3nGZg-unsplash.jpg", name: "Trying things out", category: "Test", date: "03-15-21"},
    {image:"/public/dataImages/adedotun-adegborioye-ovZOUI3nGZg-unsplash.jpg", name: "Trying things out", category: "Test", date: "03-15-21"},
    {image:"/public/dataImages/adedotun-adegborioye-ovZOUI3nGZg-unsplash.jpg", name: "Trying things out", category: "Test", date: "03-15-21"},
    {image:"/public/dataImages/adedotun-adegborioye-ovZOUI3nGZg-unsplash.jpg", name: "Trying things out", category: "Test", date: "03-15-21"},
    {image:"/public/dataImages/adedotun-adegborioye-ovZOUI3nGZg-unsplash.jpg", name: "Trying things out", category: "Test", date: "03-15-21"},
    {image:"/public/dataImages/adedotun-adegborioye-ovZOUI3nGZg-unsplash.jpg", name: "Trying things out", category: "Test", date: "03-15-21"}
  ]

  const renderCard = (card, index) =>{
    return(
      <Card style={{ width: '18rem' }} key={index} className="box">
      <Card.Img variant="top" src={card.image} />
      <Card.Body>
      <Card.Title>{card.name}</Card.Title>
      <Card.Text>
        {card.date}
      </Card.Text>
      <Button variant="primary">Go somewhere</Button>
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