import { useShoppingCart } from "../context/ShopingCarContext";
import storeItems from "../components/data/items.json";
import { formatCurrency } from "../utilites/formatCurency";
import Image from "next/image";

export function CartItem({ id, quantity }) {
  const { removeFromCart } = useShoppingCart();
  const item = storeItems.find((i) => i.id === id);
  if (item == null) return null;

  return (
    <div>
      <Image src={item.imgUrl} alt="image" width="200" height="200" />
      <div>
        <span>{item.name}</span>
      </div>
      <div>
        <span>{formatCurrency(item.price)}</span>
      </div>
      <div>
        <span>{quantity}</span>
      </div>
      <div>{formatCurrency(item.price * quantity)}</div>
      <button onClick={() => removeFromCart(item.id)}>remove item</button>
    </div>
  );
}
