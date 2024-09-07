import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "react-toastify/dist/ReactToastify.css";
import "./index.css";
import {AuthProvider} from "./context/AuthContext.jsx";
import {CartProvider} from "./context/CartContext.jsx";


ReactDOM.createRoot(document.getElementById("root")).render(
    <AuthProvider>
        <CartProvider>
            <App />
        </CartProvider>
    </AuthProvider>
);
