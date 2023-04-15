import styles from '../Home.module.css'
export const CarItem = ({ car }) => {
    return(<div key={car.id} className={styles.item} >
        <div className={styles.image}
            style={{
                backgroundImage: `url(${car.image})`,
        }}/>
        <div className={styles.info}>
            <h2>{car.name}</h2>
            <p>{car.price}Р</p>
            <button>
                Читать подробнее
            </button>
        </div>
    </div>)

}
