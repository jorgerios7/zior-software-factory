import styles from './Badge.module.css';

export default function Badge({label}: {label: string}) {
    return (
        <span className={styles.badge}>
            {label}
        </span>
    );
}