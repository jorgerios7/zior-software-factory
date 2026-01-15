import zior_tecnologiaLogo from "../../assets/images/zior_tecnologia-logo.png";
import instagramLogo from "../../assets/images/instagram-logo.png";
import linkedinLogo from "../../assets/images/linkedin-logo.png";
import whatsappLogo from "../../assets/images/whatsapp-logo.png";
import facebookLogo from "../../assets/images/facebook-logo.png";
import xLogo from "../../assets/images/x-logo.png";
import styles from './Footer.module.css';
import SocialButton from "./SocialButton";

export default function Footer() {
    const socialItems = [
        { icon: instagramLogo, label: "Instagram" },
        { icon: linkedinLogo, label: "Linkedin" },
        { icon: whatsappLogo, label: "Whatsapp" },
        { icon: xLogo, label: "X" },
        { icon: facebookLogo, label: "Facebook" },
    ];

    const services = [
        "Desenvolvimento Web",
        "Aplicativos Mobile",
        "Cloud Computing",
        "Business Intelligence",
        "Segurança Digital",
    ];

    const company = [
        "Sobre Nós",
        "Portfólio",
        "Blog",
        "Carreiras"
    ];

    function NavSection({
        title,
        items,
    }: {
        title: string;
        items: string[];
    }) {
        return (
            <div className={styles.subContainer}>
                <h2 className="description text-sm color-txt-main">{title}</h2>
                <nav className={styles.navColumn}>
                    {items.map((item) => (
                        <button key={item} className={styles.navLink}>
                            {item}
                        </button>
                    ))}
                </nav>
            </div>
        );
    }

    return (
        <section className={"color-bg-main"}>
            <div className={"line"} />

            <div className={`containerMain ${styles.itemGap}`}>
                <div className={styles.grid}>
                    <div className={styles.subContainer}>
                        <div className={styles.logo}>
                            <img src={zior_tecnologiaLogo} alt="Logomarca da empresa" />
                        </div>

                        <p className={`${styles.centerText} text-xs color-bg-main`}>
                            Transformando ideias em soluções tecnológicas
                            para micro e pequenas empresas.
                        </p>

                        <div className={styles.recyclerItem}>
                            {socialItems.map(({ icon }) => (
                                <SocialButton icon={icon} />
                            ))}
                        </div>
                    </div>

                    <NavSection title="Serviços" items={services} />
                    <NavSection title="Empresa" items={company} />

                    <div className={styles.subContainer}>
                        <h2 className={"description text-sm color-txt-main"}>
                            Contato
                        </h2>
                        <div className={styles.navColumn}>
                            <p className={"description text-xs color-txt-sec"}>contato@zior.com.br</p>
                            <p className={"description text-xs color-txt-sec"}>(11) 99999-9999</p>
                            <p className={"description text-xs color-txt-sec"}>São Paulo, SP</p>
                            <p className={"description text-xs color-txt-sec"}>Brasil</p>
                        </div>
                    </div>
                </div>

                <div className={"line"} />

                <div className={styles.footerLegal}>
                    <h1 className={"description text-xs color-txt-sec"}>
                        © 2026 Zior. Todos os direitos reservados.
                    </h1>

                    <div className={styles.navRow}>
                        <button >Política de Privacidade</button>
                        <button>Termos de Uso</button>
                    </div>
                </div>

            </div>
        </section>
    )
}