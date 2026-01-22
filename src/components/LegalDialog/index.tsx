import { useEffect, type ReactNode } from "react";
import styles from "./LegalDialog.module.css";
import { X, FileText, Shield } from "lucide-react";

type LegalDialogType = "privacy" | "terms" | "none";

interface LegalDialogProps {
  open: boolean;
  title: LegalDialogType;
  onClose: () => void;
  children: ReactNode;
}

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
  }
};

export function LegalDialog({
  open,
  title,
  onClose,
  children,
}: LegalDialogProps) {
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  if (!open) return null;

  const { icon, label } = TITLE_CONFIG[title];

  return (
    <div
      className={`${styles.overlay} ${styles.open}`}
      role="dialog"
      aria-modal="true"
    >
      <div className={styles.dialog}>
        <header className={styles.header}>
          <button
            type="button"
            className={styles.btClose}
            onClick={onClose}
            aria-label="Fechar"
          >
            <X size={42} />
          </button>

          <div className={styles.containerTitle}>
            {icon}
            <h2 className="description text-emd color-txt-main">{label}</h2>
          </div>
        </header>

        <section className={styles.content}>{children}</section>
      </div>
    </div>
  );
}
