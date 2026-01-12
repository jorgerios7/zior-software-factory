import styles from './StatsItem.module.css';

type Props = {
    value: string;
    label: string;
}

export default function StatsItem({ value, label }: Props) {
    return (
        <section className={styles.statsItem}>
            <p className={styles.value}>
                {value}
            </p>

            <p className={styles.description}>
                {label}
            </p>
        </section>
    );
}