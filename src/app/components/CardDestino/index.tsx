import { Destino } from "@/types/types"
import styles from './Card.module.css'
import Image from "next/image"
import Link from "next/dist/client/link"


type Props = {
    destino: Destino
}


const Card = ({ destino }: Props) => {
    const { id, nome, imagem } = destino;
    return (
        <Link href={`/destinos/${id}`} className={styles.card}>
            <Image src={imagem} alt={`Imagem do destino ${nome}`} width={400}
                height={250} className={styles.card_poster} />
            <div>
                <h3 className={styles.card_title}>{nome}</h3>
               
            </div>
        </Link>
    )

}

export default Card;