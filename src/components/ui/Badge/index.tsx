import styles from "./Badge.module.css";

export default function Badge({ label }: { label: string }) {
  return (
    <div>
      <span
        className={`${styles.badge} color-highlight-sec color-bd-main text-xs`}
      >
        {label}
      </span>
    </div>
  );
}
