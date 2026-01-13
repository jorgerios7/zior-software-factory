import styles from './FeatureItem.module.css';

type Props = {
    title: string;
    description: string;
    icon: React.ReactNode;
}

export default function FeatureItem({ title, description, icon }: Props) {
    return (
        <section className={`${styles.featureItem} bg-container bd-color`}>

            <div className={"iconWrapper"}>
                {icon}
            </div>

            <h1 className={"title text-md text-white"}>
                {title}
            </h1> 

            <p className={"description text-sm text-muted"}>
                {description}
            </p>

        </section> 
    );
}