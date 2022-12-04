import React from "react";
import styles from "./Card.module.scss";

function Card(props) {
  const [isAdded, setIsAdded] = React.useState(false);

  const onClickPlus = () => {
    setIsAdded(!isAdded);
  };

  return (
    <div className={styles.card}>
      <div className={styles.favorite}>
        <img width={32} height={32} src="/img/heart-unlikeit.svg" alt="heart" />
      </div>

      <img width={133} height={112} src={props.imageUrl} alt="sneakers" />
      <h5>{props.title}</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
          <span>Цена:</span>
          <b>{props.price} руб.</b>
        </div>
        <img
          className={styles.plus}
          onClick={onClickPlus}
          width={32}
          height={32}
          src={ isAdded ? "./img/checked.svg" : "./img/plus.svg"}
          alt="add"
        />
      </div>
    </div>
  );
}

export default Card;
