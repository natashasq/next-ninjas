import Link from "next/link";

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  return {
    props: { products: data },
  };
};

const Shop = ({ products }) => {
  return (
    <div>
      <h2>Products</h2>
      {products.map(product => (
        <Link key={product.id} href={`/shop/${product.id}`}>
          <h3  style={{cursor: "pointer"}}>{product.name}</h3>
        </Link>
      ))}
    </div>
  );
};

export default Shop;
