import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.scss";

export default function Welcome() {
  return (
    <>
      <Head>
        <title>Iscool</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.container1}>
        <header>
          <h2>Iscool</h2>
          <menu>
            <Link href="/signin">
              <a>Registrar</a>
            </Link>
            <Link href="/login">
              <a>Entrar</a>
            </Link>
          </menu>
        </header>
        <main>
          <h1>
            As melhores soluções
            <br />
            para a sua escola!
          </h1>
          <p>
            Lorem ipsum dolor sit amet,
            <br />
            consectetur adipiscing elit. Ut ut est nec mi vestibulum finibus et
            eleifend lectus.
            <br />
            Pellentesque vehicula dolor libero
          </p>
        </main>
      </div>
      <footer className={styles.footer}>
        <div>
          <ul>
            <li>
              <a>Sobre nós</a>
            </li>
            <li>
              <a>Parcerias</a>
            </li>
            <li>
              <a>Ferramentas</a>
            </li>
            <li>
              <a>Ajuda</a>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
}
