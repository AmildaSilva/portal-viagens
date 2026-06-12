import styles from './Destinos.module.css';
import{destinos} from "@/lib/destinos"
import Grid from '../components/Grid';
    
export default function Destinos() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h1 className={styles.title}>Nossos Destinos</h1>
        <p className={styles.description}>
          Selecione um destino para ver detalhes completos e planejar sua viagem.
        </p>
        <Grid destinos={destinos} />
      </div>
    </section>
  );
}