import "./App.css";
import ProductList from "./exercises/ProductList/ProductList";
import InputLogger from "./exercises/InputLogger/InputLogger";
import UserList from "./exercises/UserList/UserList";

function App() {
  const usershello = [
    { id: 1, name: "Negar", age: 20 },
    { id: 2, name: "Sara", age: 25 },
  ];

  return (
    <>
      <h1>Hello</h1>
      <ProductList />
      <InputLogger />
      <UserList users={usershello} />
    </>
  );
}

export default App;
