import styles from './benefits.module.scss'
import Student from '../Assets/images/beneficio1.png'

const Benefits: React.FC = () => {
    return (
        <section className={styles.flexbox}>
            <div className={styles.flexitem}>
                <img src={Student.src} alt=""/>
                <h6>Benefit</h6>
            </div>
            <div className={styles.flexitem}>
                <img src={Student.src} alt=""/>
                <h6>Benefit</h6>
            </div>

        </section>
    )
}

export default Benefits
