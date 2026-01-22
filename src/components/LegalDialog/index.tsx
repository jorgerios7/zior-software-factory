import { useEffect } from "react";
import type { ReactNode } from "react";
import styles from "./LegalDialog.module.css";
import { X } from "lucide-react";

interface LegalDialogProps {
    open: boolean;
    title: string;
    onClose: () => void;
    children: ReactNode;
}

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

    function renderTitle() {
        return title === "privacy"
            ? "Política de Privacidade"
            : "Termos de Uso"
    }

    return (
        <div className={`${styles.overlay} ${styles.open}`} role={styles.dialog} aria-modal="true">
            <div className={styles.dialog}>
                <header>
                    <h2 className={"text-emd color-txt-main"}>{renderTitle()}</h2>
                    <button className={styles.btClose} onClick={onClose} aria-label="Fechar">
                        <X size={42} />
                    </button>
                </header>
                <section className={styles.content}>{children}</section>
            </div>
        </div>
    );
}
