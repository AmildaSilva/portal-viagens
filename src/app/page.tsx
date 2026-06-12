import Link from 'next/link';
import styles from '@/styles/Home.module.css';

export default function Home() {
  return (
    <section className={styles.secaoPrincipal}>
      <div className={styles.container}>
        <h1 className={styles.title}>Explore o mundo com a gente</h1>
        <img src="/imagens/globo.png" alt="globo" width={700}
          height={600} />

        <p className={styles.subtitle}>
          Descubra destinos incríveis, dicas de viagem e planeje sua próxima aventura.
        </p>

        <Link href="/destinos" className={styles.btnPrincipal}>
          Ver destinos
        </Link>
      </div>
    </section>
  );
}