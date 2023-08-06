import Card from "../../components/Card/Card";
import Layout from "../../components/Layout/Layout";
import { useContext } from "react";
import { ProductDetail } from "../../components/ProductDetail/ProductDetail";
import { ShoppingCartContext } from "../../Context/Context";

function Home() {
  const { setsearchByTitle, filteredItems, searchByTitle } =
    useContext(ShoppingCartContext);

  const renderView = () => {
    if (filteredItems?.length > 0) {
      return filteredItems?.map((item) => <Card data={item} key={item.id} />);
    } else {
      return <div>Sin coincidencias : {searchByTitle}</div>;
    }
  };
  //? the code is nof found, the condition not found, review

  return (
    <Layout>
      <div className="flex w-80 items-center relative justify-center mb-6">
        <h1 className="font-medium text-xl">Exclusive products</h1>
      </div>
      <input
        type="text"
        placeholder="Search products"
        className="rounded-lg border-black w-80 p-4 mb-4 focus:outline "
        onChange={(event) => setsearchByTitle(event.target.value)}
      />
      {renderView()}
      <ProductDetail />
    </Layout>
  );
}

export default Home;
