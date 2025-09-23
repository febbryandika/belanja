import Link from "next/link";
import ModeToggle from "@/components/shared/header/mode-toggle";
import UserButton from "@/components/shared/header/user-button";
import { Button } from "@/components/ui/button";
import { MenuIcon, ShoppingCart } from "lucide-react";
import { Sheet, SheetContent, SheetDescription, SheetTitle, SheetTrigger } from "@/components/ui/sheet";

const Menu = () => {
  return (
    <div className="flex justify-end gap-3">
      <nav className="hidden md:flex w-full max-w-xs ">
        <ModeToggle />
        <Button asChild className="mr-2" variant="ghost">
          <Link href="/cart">
            <ShoppingCart />
          </Link>
        </Button>
        <UserButton />
      </nav>
      <nav className="md:hidden">
        <Sheet>
          <SheetTrigger className="align-middle">
            <MenuIcon />
          </SheetTrigger>
          <SheetContent className="flex flex-col items-start p-6">
            <SheetTitle>Menu</SheetTitle>
            <ModeToggle />
            <Button asChild variant="ghost">
              <Link href="/cart">
                <ShoppingCart /> Cart
              </Link>
            </Button>
            <UserButton />
            <SheetDescription></SheetDescription>
          </SheetContent>
        </Sheet>
      </nav>
    </div>
  )
}

export default Menu;