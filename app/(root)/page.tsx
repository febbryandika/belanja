import ProductList from "@/components/shared/product/product-list";
import { getLatestProducts } from "@/lib/actions/product.action";

const Homepage = async () => {
  const latestProducts = await getLatestProducts();

  return (
    <>
      <div className="bg-blue-500 text-white py-16 mx-auto rounded-2xl">
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-4">Welcome to Belanja</h2>
          <p className="text-xl">Discover amazing products at great prices</p>
        </div>
      </div>
      <ProductList data={latestProducts} title="New Product" limit={4} />
    </>

  )
}

export default Homepage;