import { CircleCheckBig } from 'lucide-react';
import styles from './StrengthsItem.module.css';

export default function StrengthsItem({ description }: { description: string; }) {
    return (
        <section className={styles.strengthsItem}>
            <div className={styles.iconWrapper}>
                <CircleCheckBig size={21} color={"var(--color-highlight-sec)"} />
            </div>


            <p className={`${styles.text} font-sm color-txt-main`}>
                {description}
            </p>
        </section>
    );
}