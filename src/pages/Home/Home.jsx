import Card from "../../components/Card/Card";
import Layout from "../../components/Layout/Layout";
import { useState, useEffect } from "react";
import { ProductDetail } from "../../components/ProductDetail/ProductDetail";

function Home() {
  const [items, setItems] = useState(null);

  useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/products")
      .then((resp) => resp.json())
      .then((data) => setItems(data));
  }, []);

  return (
    <Layout>
      <div className="grid gap-3 grid-cols-2 w-full max-w-screen-lg">

      {items?.map((item) => (
        <Card data={item} key={item.id} />
      ))}
      </div>
      <ProductDetail/>
    </Layout>
  );
}

export default Home;
