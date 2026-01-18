import styles from './NavSection.module.css';

type Props = {
    list: {
        title: string;
        items: string[];
    };
};

export default function NavSection({ list }: Props) {
    const { title, items } = list;

    return (
        <nav className={styles.navColumn}>
            <h2 className="description text-sm color-txt-main">
                {title}
            </h2>

            {items.map((item) => (
                <button key={item} className={styles.navLink}>
                    {item}
                </button>
            ))}
        </nav>
    );
}