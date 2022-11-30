import Drawer from "./components/Drawer";
import Header from "./components/Header";
import Card from "./components/Card";

let arr = [
  {
    imageUrl: "./img/item1.jpg",
    title: "Мужские Кроссовки Nike Blazer Mid Suede",
    price: "12 999",
  },
  {
    imageUrl: "./img/item2.jpg",
    title: "Мужские Кроссовки Nike Air Max 270",
    price: "8 499",
  },
  {
    imageUrl: "./img/item3.jpg",
    title: "Мужские Кроссовки Nike Blazer Mid Suede",
    price: "12 999",
  },
  {
    imageUrl: "./img/item4.jpg",
    title: "Кроссовки Puma X Aka Boku Future Rider",
    price: "8 999",
  },
];

function App() {
  return (
    <div className="wrapper clear">
      <Drawer />

      <Header />
      <div className="content p-40">
        <div className="d-flex align-center mb-40 justify-between">
          <h1>Все кроссовки</h1>
          <div className="search-block d-flex align-center">
            <img width={15} height={15} src="/img/search.svg" alt="search" />
            <input placeholder="Поиск..." type="search" />
          </div>
        </div>

        <div className="d-flex justify-between">
          {arr.map((obj) => (
            <Card imageUrl={obj.imageUrl} title={obj.title} price={obj.price} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
