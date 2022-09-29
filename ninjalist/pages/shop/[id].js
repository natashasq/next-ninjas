export const getStaticPaths = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();

    const paths = data.map(product => {
        return {
            params: {id: product.id.toString()}
        }
    })
  
    return {
     paths,
     fallback: false
    };
}

export const getStaticProps = async (context) => {
    const id = context.params.id;
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    const data = await res.json();

    return {
        props: { product: data },
      };
}

const ProductDetails = ({product}) => {
  return <div>
    <h1>{product.name}</h1>
    <p>{product.email}</p>
    <p>{product.website}</p>
    <p>{product.address.city}</p>
    <p>{product.phone}</p>
  </div>;

};

export default ProductDetails;
