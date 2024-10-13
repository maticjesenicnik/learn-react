import Header from "./components/Header";
import Meals from "./components/Meals";
import ShoppingCartProvider from "./context/ShoppingCartProvider";

function App() {
  return (
    <ShoppingCartProvider>
      <Header />
      <Meals />
    </ShoppingCartProvider>
  );
}

export default App;
