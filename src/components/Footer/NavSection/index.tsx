import styles from './NavSection.module.css';

type Props = {
    list: {
        title: string;
        items: string[];
    };
    onClick?: () => void;
};

export default function NavSection({ list, onClick }: Props) {
    const { title, items } = list;

    return (
        <nav className={styles.navColumn}>
            <h2 className="description text-sm color-txt-main">
                {title}
            </h2>

            {items.map((item) => (
                <button
                    key={item}
                    className={styles.navLink}
                    onClick={onClick}
                >
                    {item}
                </button>
            ))
            }
        </nav >
    );
}