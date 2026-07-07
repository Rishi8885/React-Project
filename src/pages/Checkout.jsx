import { useCart } from "../context/CartContext";

export default function Checkout() {
  const { getCartItemsWithProducts } = useCart();
  const cartItems = getCartItemsWithProducts();

  return (
    <div className="page">
      <div className="container">
        <h1 className="page-title">Checkout</h1>
        <div className="checkout-container">
          <div className="checkout-items">
            <h2 className="checkout-section-title">Order Summary</h2>
            {cartItems.length === 0 ? (
              <p>Your cart is empty.</p>
            ) : (
              cartItems.map((item) => (
                <div key={item.product?.id ?? item.id} className="checkout-item">
                  <img
                    src={item.product?.image}
                    alt={item.product?.name}
                    className="checkout-item-image"
                  />
                  <div className="checkout-item-details">
                    <h3 className="checkou-item-name">{item.product.name}</h3>
                    <p className="checkout-item-price">${item.product.price}</p>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}