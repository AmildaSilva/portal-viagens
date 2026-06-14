import { notFound } from 'next/navigation';
import { destinos } from '@/lib/destinos';
import Image from 'next/image';
import styles from '@/app/destinos/Destinos.module.css';


type Props = {
    params: Promise<{ id: string }>
}
export default async function DetalhesDestino({ params }: Props) {

    const { id } = await params;
    const destinoId = Number(id);




    const destino = destinos.find(destino => destino.id === destinoId);

    if (!destino) {
        notFound();
    }

    return (

        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.detailGrid}>
                    <div className={styles.detailImage}>
                        <Image
                            src={destino.imagem}
                            alt={destino.nome}
                            width={600}
                            height={400}
                            priority
                        />

                        <div className={styles.detailContent}>
                            <h1 className={styles.title}>{destino.nome}</h1>
                            <p className={styles.desc}>{destino.descricao}</p>


                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
}
