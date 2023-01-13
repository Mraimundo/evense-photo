import Head from "next/head";
import Image from "next/image";
import HomeBody from "../templates/Home/Home";
// import Header from "../components/Header";
import Header from "../components/HeaderTeste";

import { HomeContainer } from "../styles/HomeStyles";

export default function Home() {
  return (
    <HomeContainer>
      <Head>
        <title>Home | Meu portfólio</title>
        <meta
          name="description"
          content="Sou um desenvolvedor Front-end e aqui apresento alguns projetos desenvolvidos por mim!"
        />
        <meta
          property="og:description"
          content="Sou um desenvolvedor Front-end e aqui apresento alguns projetos desenvolvidos por mim!"
        />
      </Head>
      <Header />
      <main className="container">
        <HomeBody />
      </main>
    </HomeContainer>
  );
}
