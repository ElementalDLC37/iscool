import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'

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
            <a href='/login'>SOU PEDAGOGO</a>
            <a href='/login'>SOU PROFESSOR</a>
            <a href='/login'>SOU ALUNO</a>
          </menu>
        </header>
        <main>
          <h1>As melhores soluções<br/>para a sua escola!</h1>
          <a href='/signin'>NOVO POR AQUI? REGISTRE-SE!</a>
          <p>Lorem ipsum dolor sit amet,<br/>consectetur adipiscing elit. Ut ut est nec mi vestibulum finibus et eleifend lectus.<br/>Pellentesque vehicula dolor libero</p>
        </main>
      </div>

      <div className={styles.container2}>
        <div>
          <div>
            <h2>Documentation</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </div>
          <div>
            <h2>Learn</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </div>
          <div>
            <h2>Examples</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </div>
        </div>
      </div>
      <footer className={styles.footer}>
        <p>Powered by{' '}</p>
      </footer>
    </>
  )
}