import styles from './FeatureItem.module.css';

type Props = {
    title: string;
    description: string;
    icon: React.ReactNode;
}

export default function FeatureItem({ title, description, icon }: Props) {
    return (
        <section className={`${styles.featureItem} color-card-bg color-bd-main`}>

            <div className={styles.iconWrapper}>
                {icon}
            </div>

            <h1 className={"title text-md color-txt-main"}>
                {title}
            </h1> 

            <p className={`description text-sm ${styles.textSec}`}>
                {description}
            </p>

        </section> 
    );
}