import styles from './Drawer.module.scss';

function Drawer(props) {
  return (
    <div className="overlay">
      <div className={styles.drawer}>
        <h2 className="d-flex justify-between">
          Корзина
          <img className={styles.removeBtn} src="/img/remove.svg" alt="remove" onClick={props.onClickCart}/>
        </h2>

        <div className={styles.items}>
          <div className={styles.cartItem}>
            <div
              style={{ backgroundImage: "url(/img/item2.jpg)" }}
              className={styles.cartItemImg}
            ></div>

            <div className="mr-20 flex">
              <p className="mb-5">Мужские Кроссовки Nike Air Max 270</p>
              <b>12 999 руб.</b>
            </div>
            <img className={styles.removeBtn} src="/img/remove.svg" alt="remove" />
          </div>
          <div className={styles.cartItem}>
            <div
              style={{ backgroundImage: "url(/img/item2.jpg)" }}
              className={styles.cartItemImg}
            ></div>

            <div className="mr-20 flex">
              <p className="mb-5">Мужские Кроссовки Nike Air Max 270</p>
              <b>12 999 руб.</b>
            </div>
            <img className={styles.removeBtn} src="/img/remove.svg" alt="remove" />
          </div>
        </div>
        <div className="cartTotalBlock">
          <ul>
            <li>
              <span>Итого:</span>
              <div></div>
              <b>21 498 руб. </b>
            </li>
            <li>
              <span>Налог 5%:</span>
              <div></div>
              <b>1074 руб. </b>
            </li>
          </ul>
          <button className="greenButton">
            Оформить заказ <img src="/img/arrow.svg" alt="arrow" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Drawer;
