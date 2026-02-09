import { MessageCircle } from "lucide-react";
import HighlightButton from "../../ui/HighlightButton";
import styles from "./WhatsappContact.module.css";
import openWhatsapp from "../../../utils/whatsapp";

type Props = {
  title: string;
  desc: string;
  benefitsList: { name: string }[];
  ctaText: string;
  statusText: string;
};

export default function WhatsappContact({
  title,
  desc,
  benefitsList,
  ctaText,
  statusText,
}: Props) {
  return (
    <div className={`${styles.whatsappContact} color-card-bg color-bd-main`}>
      {/* WhatsApp Icon */}
      <div className={styles.whatsappIcon}>
        <MessageCircle size={50} />
      </div>

      <h1 className={"title text-emd"}>{title}</h1>
      <p className={"description text-sm color-txt-sec"}>{desc}</p>

      <div className={styles.benefitContainer}>
        {benefitsList.map(({ name }) => (
          <div key={name} className={styles.benefitCard}>
            <div className={styles.point} />
            <p className="description text-xs color-txt-sec">{name}</p>
          </div>
        ))}
      </div>

      <HighlightButton name={ctaText} onClick={openWhatsapp} />

      <div className={styles.footer}>
        <span className={styles.pulseDot} aria-hidden />
        <p className={"description text-xs color-txt-sec"}>{statusText}</p>
      </div>
    </div>
  );
}
