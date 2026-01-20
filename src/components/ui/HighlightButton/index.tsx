import styles from './HighlightButton.module.css';

type Props = {
    name: string;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export default function HighlightButton({ name, onClick }: Props) {

    return (
        <button
            type="button"
            className={styles.button}
            onClick={onClick}
        >
            {name}
            {/*icon && <img src={icon} alt="Icon" className={styles.icon} />*/}
        </button>
    );
}