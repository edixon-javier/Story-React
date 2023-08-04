import Card from "../../components/Card/Card";
import Layout from "../../components/Layout/Layout";
import { useContext } from "react";
import { ProductDetail } from "../../components/ProductDetail/ProductDetail";
import { ShoppingCartContext } from "../../Context/Context";

function Home() {
  const { items, setsearchByTitle } = useContext(ShoppingCartContext);

  return (
    <Layout>
      <div className="flex w-80 items-center relative justify-center mb-6">
        <h1 className="font-medium text-xl">Exclusive products</h1>
      </div>
      <input
        type="text"
        placeholder="Search products"
        className="rounded-lg border-black w-80 p-4 mb-4 focus:outline"
        onChange={(event) => setsearchByTitle(event.target.value)}
      />
      <div className="grid gap-3 grid-cols-1 w-full max-w-screen-lg">
        {items?.map((item) => (
          <Card data={item} key={item.id} />
        ))}
      </div>
      <ProductDetail />
    </Layout>
  );
}

export default Home;
