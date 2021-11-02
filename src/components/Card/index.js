import React from "react";
import { useParams } from "react-router";
import './style.css'
const Card = () => {
  const cards = [
    {
      id: 0,
      name: "Tree ",
      img: "https://www.bssei.in/wp-content/uploads/2021/09/news1.jpg",
    },
    {
      id: 1,
      name: "Another Tree",
      img: "https://i0.hippopx.com/photos/654/243/649/tree-field-cornfield-nature-preview.jpg",
    },
    {
      id: 2,
      name: "Field",
      img: "https://cdn.pixabay.com/photo/2019/07/06/12/28/landscape-4320380_960_720.jpg",
    },
  ];


  // second page methods
  let { id } = useParams();

  const card = cards.find((item, i) => Number(id) === item.id);
// ******************************************
  return (
    <div className='items'>
      <h1> {card.name} </h1>
      <img  src={card.img} alt='logo' />
    </div>
  );
};

export default Card;
