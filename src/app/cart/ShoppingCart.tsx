import { useShoppingCart } from "../context/ShopingCarContext";
import { formatCurrency } from "../utilites/formatCurency";
import { CartItem } from "./CartItem";
import storeItems from "../components/data/items.json";

type ShoppingCartProps = {
  isOpen: boolean;
};

export function ShoppingCart({ isOpen }: ShoppingCartProps) {
  const { closeCart, cartItems } = useShoppingCart();
  return (
    isOpen && (
      <div>
        <h2>Cart</h2>
        <button onClick={closeCart}>close</button>
        <div>
          {cartItems.map((item) => (
            <CartItem key={item.id} {...item} />
          ))}
          <div>
            <h3>Total</h3>
            {formatCurrency(
              cartItems.reduce((total, cartItem) => {
                const item = storeItems.find((i) => i.id === cartItem.id);
                return total + (item?.price || 0) * cartItem.quantity;
              }, 0)
            )}
          </div>
        </div>
      </div>
    )
  );
}
