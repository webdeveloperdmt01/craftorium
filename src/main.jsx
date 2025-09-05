import "./index.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { ShopProvider } from "./pages/Shop/ShopComponants/ShopProvider.jsx";
import { CartProvider } from "./pages/Shop/ShopComponants/CartContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CartProvider>
      <ShopProvider>
        <App />
      </ShopProvider>
    </CartProvider>
  </StrictMode>
);
