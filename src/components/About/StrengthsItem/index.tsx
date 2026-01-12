import { CircleCheckBig } from 'lucide-react';
import styles from './StrengthsItem.module.css';

export default function StrengthsItem({ description }: { description: string; }) {
    return (
        <section className={styles.strengthsItem}>
            <div className={styles.iconWrapper}>
                <CircleCheckBig size={24} color={"#00e0ff"} />
            </div>


            <p className={styles.description}>
                {description}
            </p>
        </section>
    );
}