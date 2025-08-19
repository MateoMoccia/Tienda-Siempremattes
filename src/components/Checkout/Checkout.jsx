import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CarritoContext } from "../../Context/CarritoContext";
import "./Checkout.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { body } from "framer-motion/client";

const Checkout = () => {
  const { productosEnCarrito, vaciarCarrito } = useContext(CarritoContext);
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [metodoPago, setMetodoPago] = useState("");
  const [redirigiendo, setRedirigiendo] = useState(false);
  const navigate = useNavigate();

const API_URL = import.meta.env.VITE_API_URL || "https://backend-siempremattes.onrender.com";

  const total = productosEnCarrito.reduce((acc, prod) => {
    const precioLimpio = Number(String(prod.precio).replace(/\./g, ""));
    const cantidad = Number(prod.cantidad);
    return acc + precioLimpio * cantidad;
  }, 0);

const payer = {
  name : nombre,
  email : email
}

const itemsMercadoPago = productosEnCarrito.map((producto) => ({
  title: String(producto.nombre),
  unit_price: Number(String(producto.precio).replace(/\./g, "")), 
    quantity: Number(producto.cantidad)   // asegurarse que sea number
}));

const redirigirMercadoPago = async () => {
  try {
    // Log de lo que vas a enviar
    console.log("Enviando datos a /crear-preferencia:", {
      items: itemsMercadoPago,
      payer: payer,
    });

    const response = await fetch(`${API_URL}/crear-preferencia`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        items: itemsMercadoPago,
        payer: payer,
        back_urls: {
          success: "http://localhost:5173/final",
          failure: "http://localhost:5173/checkout",
          pending: "http://localhost:5173/checkout"
        },
        auto_return: "approved"
      }),
    });

    // Log del estado HTTP de la respuesta
    console.log("Estado HTTP del backend:", response.status, response.statusText);

    const data = await response.json();

    // Log de lo que responde tu backend
    console.log("Respuesta del backend (JSON):", data);

    window.location.href = data.init_point;

  } catch (error) {
    console.error("Error redirigiendo a Mercado Pago:", error);
    setRedirigiendo(false);
    toast.error("No se pudo procesar el pago. Intentá nuevamente.");
  }
};


  const enviarMail = () => {
    fetch(`${API_URL}/enviar-mail`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email,
        nombre,
        metodoPago,
      }),
    }).catch((error) => {
      console.error("Error enviando mail", error);
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!metodoPago) {
      toast.error("Por favor, seleccioná un método de pago.");
      return;
    }

    if (productosEnCarrito.length === 0) {
      toast.error("No hay productos en el carrito.");
      return;
    }

    if (!nombre || !email) {
      toast.error("Por favor completá nombre y correo electrónico.");
      return;
    }

    if (metodoPago === "contacto") { 
      vaciarCarrito();
      enviarMail();
      navigate("/final");
    } else if (metodoPago === "mercado_pago") {
      setRedirigiendo(true);
       enviarMail();
      await redirigirMercadoPago();
    }
  };

  return (
    <>
      <div className="checkout-container">
        <h5>Finalizar Compra</h5>
        <form onSubmit={handleSubmit}>
          <label>
            Nombre y Apellido:
            <input
              type="text"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              required
            />
          </label>

          <label>
            Correo Electrónico:
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </label>

          <label>
            Método de Pago:
            <select
              className="metodo-de-pago"
              value={metodoPago}
              onChange={(e) => setMetodoPago(e.target.value)}
              required
            >
              <option value=""></option>
              <option value="contacto">
                Crédito/Débito/Efectivo (arreglar con el vendedor)
              </option>
              <option value="mercado_pago">Mercado Pago</option>
            </select>
          </label>

          <label>
            Productos:
            <ul className="info-compra-lista">
              {productosEnCarrito.length === 0 ? (
                <li>No hay productos seleccionados.</li>
              ) : (
                productosEnCarrito.map((producto, index) => ( //LA FUNCION DE PRODUCTOS EN EL CARRITO ESTA ACA//
                  
                  <li key={index}>
                    {producto.nombre} - {producto.cantidad} x {producto.precio} ARS
                  </li>
                ))
              )}
            </ul>
          </label>

          <button type="submit" disabled={redirigiendo}>
            {redirigiendo ? "Redirigiendo..." : "Confirmar Compra"}
          </button>
        </form>

        <div className="total-compra" style={{ marginTop: "1rem" }}>
          <strong>Total de la compra:</strong> {total.toLocaleString("es-AR")} ARS
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default Checkout;
