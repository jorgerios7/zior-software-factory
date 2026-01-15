import styles from './Badge.module.css';

export default function Badge({ label }: { label: string }) {
    return (
        <div>
            <span className={`${styles.badge } color-primary bd-color text-xs`}>
                {label}
            </span>
        </div>
    );
}