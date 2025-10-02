import { Metadata } from "next";
import { getMyCart } from "@/lib/actions/cart.action";
import { redirect } from "next/navigation";
import { auth } from "@/auth";
import { getUserById } from "@/lib/actions/user.actions";
import { ShippingAddress } from "@/types";
import ShippingAddressForm from "@/app/(root)/shipping-address/shipping-address-form";
import CheckoutSteps from "@/components/shared/checkout-steps";

export const metadata: Metadata = {
  title: 'Shipping Address',
};

const ShippingAddressPage = async () => {
  const cart = await getMyCart();
  if (!cart || cart.items.length === 0) redirect("/cart");

  const session = await auth();

  const userId = session?.user?.id;
  if (!userId) throw new Error("No user ID found");

  const user = await getUserById(userId);

  return (
    <>
      <CheckoutSteps current={1} />
      <ShippingAddressForm address={user.address as ShippingAddress} />
    </>
  );
}

export default ShippingAddressPage;