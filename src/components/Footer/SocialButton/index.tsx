import styles from './SocialButton.module.css';

export default function SocialButton({ icon }: { icon: React.ReactNode; }) {
    return (
        <div className={styles.socialButton}>
            <div className="iconWrapper">
                {icon}
            </div>
        </div>
    );
}