import { GetStaticProps } from "next";
import Head from "next/head";
import Header from "../../components/Header";

export default function Home1({ projetos }) {
  return (
    <>
      <Head>
        <title>Projetos | Meu portfólio</title>
        <meta
          name="description"
          content="Sou um desenvolvedor Front-end e aqui apresento alguns projetos desenvolvidos por mim!"
        />
        <meta
          property="og:description"
          content="Sou um desenvolvedor Front-end e aqui apresento alguns projetos desenvolvidos por mim!"
        />
      </Head>
      <h1>Home 1</h1>
    </>
  );
}
