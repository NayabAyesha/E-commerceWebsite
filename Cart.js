import React, { useContext, useState } from "react"; 
import { ProductContext } from "../../Components/Context/ProductContext"; 

const Cart = () => {
  const { cart, removeFromCart } = useContext(ProductContext); 

  const [discountCode, setDiscountCode] = useState(''); 
  const [totalPrice, setTotalPrice] = useState(0); 
  const [finalPrice, setFinalPrice] = useState(0); 

  const handleRemoveFromCart = (id) => { 
    removeFromCart(id); 
  };

  const handleBuyButtonCart = () => { 
    if (cart.length === 0) { 
      alert("Please add some items to your cart to proceed with the purchase."); 
    } else { 
      cart.forEach(product => removeFromCart(product.id)); 
      alert("The selected products have been bought successfully! Thanks for your purchase."); 
    } 
  };

  const handleDiscountChange = (event) => {
    setDiscountCode(event.target.value);
  };

  const applyDiscount = () => {
    if (discountCode === 'Flat10') {
      const discountedPrice = totalPrice * 0.9; 
      setFinalPrice(discountedPrice);
    } else {
      setFinalPrice(totalPrice);
    }
  };

  React.useEffect(() => {
    const calculateTotalPrice = () => {
      let total = 0;
      cart.forEach((product) => {
        total += product.price;
      });
      setTotalPrice(total);
      setFinalPrice(total); 
    };

    calculateTotalPrice();
  }, [cart]);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Shopping Cart</h2>
      {cart.length === 0 ? (
        <div>
          <p>Your cart is empty.</p>
          <p>Please add some items to your cart to proceed with the purchase.</p>
        </div>
      ) : (
        <div>
          {cart.map((product, index) => (
            <div key={index} style={{ borderBottom: "1px solid #ddd", padding: "10px" }}>
              <img src={product.image} alt={product.title} width="50px" />
              <h4>{product.title}</h4>
              <p>Price: ${product.price}</p>
              <button onClick={() => handleRemoveFromCart(product.id)}>Remove</button>
            </div>
          ))}
        </div>
      )}

      <div>
        <h3>Total Price: ${totalPrice.toFixed(2)}</h3>

        <div>
          <p>Discount code: Flat10</p>
          <label>Discount Code:</label>
          <input 
            type="text" 
            value={discountCode} 
            onChange={handleDiscountChange} 
            placeholder="Enter discount code" 
          />
          <button onClick={applyDiscount}>Apply</button>
        </div>

        <h3>Final Price: ${finalPrice.toFixed(2)}</h3>
      </div>

      <div className="BuyContainer">
        <div className="buy-button">
          <button onClick={handleBuyButtonCart}>Buy</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
