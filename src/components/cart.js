import { useCart } from '../context/CartContext';
export default function Cart() {
  const { cart } = useCart();
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div style={{ padding: '20px' }}>
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {cart.map((item, index) => (
              <li key={index} style={{
                borderBottom: '1px solid #ddd',
                padding: '10px 0'
              }}>
                <strong>{item.name}</strong> – ₹{item.price}
              </li>
            ))}
          </ul>
          <h3>Total: ₹{total}</h3>
        </div>
      )}
    </div>
  );
}