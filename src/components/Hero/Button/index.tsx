import styles from './Button.module.css';

type Props = {
    name: string;
    onClick: () => void;
}

export default function Button({ name, onClick }: Props) {
    return (
        <button
            className={`${styles.button} text-esm color-highlight-sec`}
            onClick={onClick}
        >
            {name}
        </button>
    );
} 