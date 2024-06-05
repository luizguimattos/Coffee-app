import { ThemeProvider } from "styled-components";
import { Header } from "./components/Header/Header";
import { defaultTheme } from "./styles/themes/default";
import { Outlet } from "react-router-dom";
import { CartContextProvider } from "./contexts/CartProvider";

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CartContextProvider>
        <Header />
        <Outlet />
      </CartContextProvider>
    </ThemeProvider>
  );
}

export default App;
