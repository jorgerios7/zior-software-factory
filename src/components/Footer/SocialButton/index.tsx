import styles from './SocialButton.module.css';

export default function SocialButton({ icon }: { icon: string; }) {
    return (
        <div className={styles.socialButton}>
            <div className={styles.logo}>
                <img src={icon} alt="Logomarca da empresa" />
            </div>
        </div>
    );
}