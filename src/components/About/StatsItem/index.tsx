import styles from './StatsItem.module.css';

type Props = {
    value: string;
    label: string;
}

export default function StatsItem({ value, label }: Props) {
    return (
        <section className={styles.statsItem}>
            <p className={`${styles.value} text-emd`}>
                {value}
            </p>

            <p className={"description text-sm text-muted"}>
                {label}
            </p>
        </section> 
    );
}