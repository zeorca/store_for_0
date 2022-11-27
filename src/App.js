function App() {
  return (
    <div className="wrapper clear">
      <header className="d-flex justify-between align-center p-40">
        <div className="d-flex align-center ">
          <img width={40} height={40} src="/img/logo.png" alt="logo" />
          <div>
            <h3 className="text-uppercase">React Sneakers</h3>
            <p className="opacity-5">Магазин лучших кроссовок</p>
          </div>
        </div>
        <ul className="d-flex">
          <li className="mr-30">
            <img width={18} height={18} src="/img/cart.svg" alt="cart" />
            <span>1205 руб.</span>
          </li>
          <li className="mr-20">
            <img width={18} height={18} src="/img/user.svg" alt="user" />
          </li>
        </ul>
      </header>
      <div className="content p-40">
        <h1 className="mb-40">Все кроссовки</h1>

        <div className="d-flex justify-between">
          <div className="card">
            <img
              width={133}
              height={112}
              src="./img/item1.jpg"
              alt="sneakers"
            />
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Цена:</span>
                <b>12 999 руб.</b>
              </div>
              <button className="button">
                <img width={11} height={11} src="./img/plus.svg" alt="add" />
              </button>
            </div>
          </div>

          <div className="card">
            <img
              width={133}
              height={112}
              src="./img/item2.jpg"
              alt="sneakers"
            />
            <h5>Мужские Кроссовки Nike Air Max 270</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Цена:</span>
                <b>12 999 руб.</b>
              </div>
              <button className="button">
                <img width={11} height={11} src="./img/plus.svg" alt="add" />
              </button>
            </div>
          </div>

          <div className="card">
            <img
              width={133}
              height={112}
              src="./img/item3.jpg"
              alt="sneakers"
            />
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Цена:</span>
                <b>8 499 руб.</b>
              </div>
              <button className="button">
                <img width={11} height={11} src="./img/plus.svg" alt="add" />
              </button>
            </div>
          </div>

          <div className="card">
            <img
              width={133}
              height={112}
              src="./img/item4.jpg"
              alt="sneakers"
            />
            <h5>Кроссовки Puma X Aka Boku Future Rider</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Цена:</span>
                <b>8 999 руб.</b>
              </div>
              <button className="button">
                <img width={11} height={11} src="./img/plus.svg" alt="add" />
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default App;
