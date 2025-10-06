import { Metadata } from "next";
import { auth } from "@/auth";
import { getUserById } from "@/lib/actions/user.actions";
import PaymentMethodForm from "@/app/(root)/payment-method/payment-method-form";
import CheckoutSteps from "@/components/shared/checkout-steps";
import { redirect } from "next/navigation";
import {getMyCart} from "@/lib/actions/cart.action";

export const metadata: Metadata = {
  title: "Select Payment Method",
}

const PaymentMethodPage = async () => {
  const cart = await getMyCart();
  const session = await auth();
  const userId = session?.user?.id;
  if (!userId) {
    throw new Error("User not found");
  }

  const user = await getUserById(userId);

  if (!cart || cart.items.length === 0) redirect("/cart");
  if (!user.address) redirect("/cart");

  return (
    <div>
      <CheckoutSteps current={2} />
      <PaymentMethodForm preferredPaymentMethod={user.paymentMethod} />
    </div>
  );
}

export default PaymentMethodPage;