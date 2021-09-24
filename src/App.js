import './App.css';

const proxyUrl = "https://cors-anywhere.herokuapp.com/";

const goods = async() => {
  const list_of_goods = await fetch(`https://614df672e3cf1f001712d464.mockapi.io/api/data/goods`)
  .then(res => console.log(res));
  return list_of_goods
}
goods()

function App() {
  return (
    <div>
    </div>
  );
}

export default App;
