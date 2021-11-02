import React, { useState } from "react";
import { useHistory } from "react-router";
import "./style.css";
const Cards = () => {
  const history = useHistory();
  const [cards, setCard] = useState([
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
  ]);

  const cardPage = (id) => {
    history.push(`/card/${id}`);
  };

  return (
    <div>
      <ul className="ulCards">
        {cards.map((item, i) => (
          <div className="cards">
            <li className="card" key={i} onClick={() => cardPage(item.id)}>
              <h2>{item.name}</h2> <img src={item.img} />
            </li>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default Cards;
