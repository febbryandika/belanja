import ProductList from "@/components/shared/product/product-list";
import {getFeaturedProducts, getLatestProducts} from "@/lib/actions/product.action";
import ProductCarousel from "@/components/shared/product/product-carousel";
import ViewAllProductsButton from "@/components/view-all-products-button";

const Homepage = async () => {
  const latestProducts = await getLatestProducts();
  const featuredProducts = await getFeaturedProducts();

  return (
    <>
      {/*<div className="bg-blue-500 text-white py-16 mx-auto rounded-2xl">*/}
      {/*  <div className="text-center">*/}
      {/*    <h2 className="text-4xl font-bold mb-4">Welcome to Belanja</h2>*/}
      {/*    <p className="text-xl">Discover amazing products at great prices</p>*/}
      {/*  </div>*/}
      {/*</div>*/}
      {featuredProducts.length > 0 && (
        <ProductCarousel data={featuredProducts} />
      )}
      <ProductList data={latestProducts} title="New Product" limit={4} />
      <ViewAllProductsButton />
    </>

  )
}

export default Homepage;