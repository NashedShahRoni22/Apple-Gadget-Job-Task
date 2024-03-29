import Head from "next/head";
import Form from "@/components/Form/Form";
import Products from "@/components/Products/Products";

export default function Home() {
  return (
    <>
      <Head>
        <title>Apple Gadget Cart</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="container mx-auto my-10 lg:flex gap-4">
        <Products/>
        <Form/>
      </main>
    </>
  );
}
