import { MessageCircle } from 'lucide-react';
import HighlightButton from '../../ui/HighlightButton';
import styles from './WhatsappContact.module.css';
import { LINKS } from "../../../content/links";

type Props = {
    title: string;
    desc: string;
    benefitsList: { name: string }[];
    ctaText: string;
    statusText: string
}

export default function WhatsappContact({ title, desc, benefitsList, ctaText, statusText }: Props) {
    return (
        <form className={`${styles.whatsappContact} color-card-bg color-bd-main`}>

            {/* WhatsApp Icon */}
            <div className={styles.whatsappIcon}>
                <MessageCircle size={50} />
            </div>

            <h1 className={"title text-emd"}>
                {title}
            </h1>
            <p className={"description text-sm color-txt-sec"}>
                {desc}
            </p>

            <div className={styles.benefitContainer}>
                {benefitsList.map(({ name }, index) => (
                    <div key={name ?? index} className={styles.benefitCard}>
                        <div className={styles.point} />
                        <p className="description text-xs color-txt-sec">
                            {name}
                        </p>
                    </div>
                ))}
            </div>

            <HighlightButton name={ctaText} onClick={() => window.open(LINKS.social.whatsapp, '_blank')} />

            <div className={styles.footer}>
                <span className={styles.pulseDot} aria-hidden />
                <p className={"description text-xs color-txt-sec"}>
                    {statusText}
                </p>
            </div>
        </form>
    );
}
