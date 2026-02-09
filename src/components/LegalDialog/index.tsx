import { useEffect, type ReactNode } from "react";
import styles from "./LegalDialog.module.css";
import { X, FileText, Shield } from "lucide-react";
import LegalView from "./LegalView";
import { LAST_UPDATE, PRIVACY_POLICY } from "../../content/privacyPolicy";
import { TERMS } from "../../content/terms";
import { motion } from 'framer-motion';

type LegalDialogType = "privacy" | "terms" | "none";

type LegalDialogProps = {
  type: LegalDialogType;
  onClose: () => void;
};

const TITLE_CONFIG: Record<
  LegalDialogType,
  { icon: ReactNode; label: string }
> = {
  privacy: {
    icon: <Shield size={42} />,
    label: "Política de Privacidade",
  },
  terms: {
    icon: <FileText size={42} />,
    label: "Termos de Uso",
  },
  none: {
    icon: null,
    label: "",
  },
};

export function LegalDialog({ type, onClose }: LegalDialogProps) {
  useEffect(() => {
    const originalOverflow = document.body.style.overflow;

    if (type !== "none") {
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [type]);

  if (type === "none") return null;

  const { icon, label } = TITLE_CONFIG[type];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`${styles.overlay} ${styles.open}`}
      role="dialog"
      aria-modal="true"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className={styles.dialog}>
        <header className={styles.header}>
          <button
            type="button"
            className={styles.btClose}
            onClick={onClose}
            aria-label="Fechar"
          >
            <X size={42} />
          </button>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={styles.containerTitle}>
            {icon}
            <h2 className="description text-emd color-txt-main">{label}</h2>
          </motion.div>
          <p
            className={`${styles.updateInf} description text-xs color-txt-sec`}
          >
            {`${LAST_UPDATE.label} ${LAST_UPDATE.text}`}
          </p>
        </header>

        <section className={styles.content}>
          {type === "privacy" && <LegalView legalList={PRIVACY_POLICY} />}

          {type === "terms" && <LegalView legalList={TERMS} />}
        </section>
      </motion.div>
    </motion.div>
  );
}
