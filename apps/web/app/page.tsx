import CreateProduct from "./createProduct/CreateProduct";
import ProductList from "./Products/ProductList";

export const dynamic = "force-dynamic";

export default function Home() {
  return (
    <>
      <CreateProduct />
      <ProductList />
    </>
  );
}
