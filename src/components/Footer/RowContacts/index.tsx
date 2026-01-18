import styles from './RowContacts.module.css';

type Props = {
    list: {
        title: string;
        items: string[];
    };
}

export default function RowContacts({ list }: Props) {
    const { title, items } = list;

    return (
        <nav className={styles.navColumn}>
            <h2 className="description text-sm color-txt-main">
                {title}
            </h2>
            {items.map((item) => (
                <p className={"description text-xs color-txt-sec"}>{item}</p>
            ))}
        </nav>
    );
}