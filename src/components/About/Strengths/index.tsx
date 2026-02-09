import { CircleCheckBig } from "lucide-react";
import styles from "./Strengths.module.css";

export default function Strengths({ desc = [] }: { desc?: string[] }) {
  return (
    <section className={styles.strengths}>
      {desc.map((item, index) => (
        <div key={index} className={styles.listView}>
          <div className={styles.iconWrapper}>
            <CircleCheckBig size={21} color="var(--color-highlight-sec)" />
          </div>
          <p className={`${styles.text} font-sm color-txt-main`}>{item}</p>
        </div>
      ))}
    </section>
  );
}
