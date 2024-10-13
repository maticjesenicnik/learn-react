import Cart from "./components/Cart";
import Header from "./components/Header";
import Meals from "./components/Meals";
import ShoppingCartProvider from "./context/ShoppingCartProvider";
import { UserProgressProvider } from "./context/UserProgressProvider";

function App() {
  return (
    <UserProgressProvider>
      <ShoppingCartProvider>
        <Header />
        <Meals />
        <Cart />
      </ShoppingCartProvider>
    </UserProgressProvider>
  );
}

export default App;
