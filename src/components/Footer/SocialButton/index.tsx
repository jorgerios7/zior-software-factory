import styles from "./SocialButton.module.css";

type Props = {
  icon: string;
  url: string;
};

export default function SocialButton({ icon, url }: Props) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.socialButton}
      aria-label={"label"}
    >
      <div className={styles.logo}>
        <img src={icon} alt={"label"} />
      </div>
    </a>
  );
}
