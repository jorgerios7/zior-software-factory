import styles from './FeatureItem.module.css';

type Props = {
    title: string;
    description: string;
    icon: React.ReactNode;
}

export default function FeatureItem({ title, description, icon }: Props) {
    return (
        <section className={styles.featureItem}>

            <div className={styles.iconWrapper}>
                {icon}
            </div>

            <h1 className={styles.title}>
                {title}
            </h1>

            <p className={styles.description}>
                {description}
            </p>

        </section>
    );
}