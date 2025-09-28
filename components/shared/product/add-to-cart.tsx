"use client";

import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"
import { Plus, Minus, Loader } from "lucide-react"
import { Cart, CartItem } from "@/types";
import { toast } from "sonner"
import { addItemToCart, removeItemFromCart } from "@/lib/actions/cart.action";
import { useTransition } from "react";

const AddToCart = ({ cart, item }: {cart?: Cart, item: CartItem}) => {
  const router = useRouter();
  const [isPending, startTransition] = useTransition()

  const handleAddToCart = async () => {
    startTransition(async () => {
      const res = await addItemToCart(item);

      if (!res.success) {
        toast.error(res.message);
        return;
      }

      if (res.message.includes("updated")) {
        toast.success(res.message);
        return;
      }

      toast.success(res.message, {
        action: {
          label: "Go to Cart",
          onClick: () => router.push("/cart"),
        },
      });
    })
  };

  const handleRemoveFromCart = async () => {
    startTransition(async () => {
      const res = await removeItemFromCart(item.productId);

      if (!res.success) {
        toast.error(res.message);
        return;
      }

      if (res.success) {
        toast.success(res.message);
        return;
      }
    })
  };

  const existItem = cart && cart.items.find((x) => x.productId === item.productId);

  return existItem ? (
    <div className="flex item-center gap-4">
      <Button type="button" variant="outline" onClick={handleRemoveFromCart} disabled={isPending}>
        <Minus className="h-4 w-4"/>
      </Button>
      <span className="w-4 flex items-center justify-center">{isPending ? (<Loader className="h-4 w-4 animate-spin"/>) : (existItem.qty)}</span>
      <Button type="button" variant="outline" onClick={handleAddToCart} disabled={isPending}>
        <Plus className="h-4 w-4"/>
      </Button>
    </div>
    ) : (
    <Button className="w-full" type="button" onClick={handleAddToCart}>
      {isPending ? (<Loader className="h-4 w-4 animate-spin"/>) : (<Plus className="h-4 w-4"/>)}
      Add To Cart
    </Button>
  );
};

export default AddToCart;