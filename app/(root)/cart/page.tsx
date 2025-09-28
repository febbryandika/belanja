import { Metadata } from "next";
import { getMyCart } from "@/lib/actions/cart.action";
import CartTable from "@/app/(root)/cart/cart-table";

export const metadata: Metadata = {
  title: "Shopping Cart",
}

const CartPage = async () => {
  const cart = await getMyCart();

  return (
    <div>
      <CartTable cart={cart} />
    </div>
  );
}

export default CartPage;