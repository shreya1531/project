import { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase'; // ✅ correct relative path
import { useCart } from '../context/CartContext';

export default function Home() {
  const [products, setProducts] = useState([]);
  const { addToCart } = useCart();

  useEffect(() => {
    const fetchProducts = async () => {
      const snap = await getDocs(collection(db, 'products'));
      const data = snap.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      console.log('Fetched products:', data);
      setProducts(data);
    };
    fetchProducts();
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <h2>Products</h2>
      {products.length === 0 && <p>No products found.</p>}
      {products.map((p) => (
        <div key={p.id} style={{ marginBottom: '15px' }}>
          <h4>{p.name}</h4>
          <p>₹{p.price}</p>
          <button
            onClick={() => {
              addToCart(p);
              alert(`${p.name} added to cart!`);
            }}
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
}
