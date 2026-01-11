import styles from './HighlightButton.module.css';

type Props = {
    name: string;
    onClick: () => void;
}

export default function HighlightButton({ name, onClick }: Props) {
    return (
        <button
            className={styles.button}
            onClick={onClick}
        >
            {name}
            {/*icon && <img src={icon} alt="Icon" className={styles.icon} />*/}
        </button>
    );
}