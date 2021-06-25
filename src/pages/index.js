import Head from "next/head";
import Banner from "../components/Banner";
import Header from "../components/Header";
import ProbuctFeed from "../components/ProbuctFeed";
export default function Home({ products }) {
  return (
    <div className ="bg-gray-100">
      <Head>
        <title>Amazon 2.0</title>
      </Head>

     <h1></h1>
      {/* ---- ---- */}
      {/* Header */}
      <Header/>
      <main className =" max-w-screen-xl mx-auto ">
        {/* Banner */}
          <Banner/>
        {/* ProductFeed */}
        <ProbuctFeed products = { products }/>
      </main>
    </div>
  );
}

export async function getServerSideProps(context){
  const products = await fetch("https://fakestoreapi.com/products").then(
     (res) => res.json());
  return {
      
      props: {
        products,
      },
    
  }
}