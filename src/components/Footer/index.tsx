import { Mail, MapPin, Phone } from "lucide-react";
import ziorLogo from "../../assets/images/zior-logo.png";
import styles from './Footer.module.css';
import SocialButton from "./SocialButton";

export default function Footer() {
    const items: { icon: React.ReactNode }[] = [
        { icon: <Mail size={24} /> },
        { icon: <Phone size={24} /> },
        { icon: <MapPin size={24} /> },
    ];

    return (
        <section className={"main bg-main"}>
            <div className={`${styles.column} containerMain`}>

                <div className={styles.logo}>
                    <img src={ziorLogo} alt="Logomarca da empresa" />
                </div>

                <p>
                    Transformando ideias em soluções tecnológicas para micro e pequenas empresas.
                </p>

                <div className={styles.recyclerItem}>
                    {items.map(({ icon }) => (
                        <SocialButton icon={icon} />
                    ))}
                </div>
            </div>
        </section>
    )
}