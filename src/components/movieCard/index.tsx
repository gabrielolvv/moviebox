import styles from "./styles.module.scss";

interface MovieCardProps {
    title: string;
    banner: string;
    avality: string;
    category: string;
    time: string;
  }
  
const MovieCard: React.FC<MovieCardProps> = ({ title, banner, avality, category, time }) => {

    return(
        <div className={styles.container}>
            <div className={styles.banner}>
                <div className={styles.favorite}>
                </div>
                <img src={banner} alt="" />
            </div>
            <div className={styles.info}>
                <p className={styles.time}>{time}</p>
                <p className={styles.title}>{title}</p>
                <div className={styles.avality}>
                    <p>86.9/100</p>
                    <p>97%</p>
                </div>
                <p className={styles.category}>{category}</p>
            </div>
        </div>
    )
}

export default MovieCard;