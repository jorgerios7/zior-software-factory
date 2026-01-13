import { CircleCheckBig } from 'lucide-react';
import styles from './StrengthsItem.module.css';

export default function StrengthsItem({ description }: { description: string; }) {
    return (
        <section className={styles.strengthsItem}>
            <div className={styles.iconWrapper}>
                <CircleCheckBig size={21} color={"#00e0ff"} />
            </div>


            <p className={`${styles.text} font-sm text-white `}>
                {description}
            </p>
        </section>
    );
}