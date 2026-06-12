import { Destino } from "@/types/types"
import styles from './Card.module.css'


type Props = {
    destino: Destino
}


const Card = ({destino}: Props) => {
    const {id, nome, imagem} = destino; 
    return(
        <div key={id} className={styles.card}>
            <img src={imagem} alt={`Imagem do destino ${nome}`} width={300} height={200} className={styles.card_poster}/>
            <div>
                <h3 className={styles.card_title}>{nome}</h3>
                <p className={styles.card_description}>{destino.descricao}</p>
            </div>
        </div>
    )

}

export default Card;