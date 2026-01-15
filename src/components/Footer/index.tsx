import ziorLogo from "../../assets/images/zior-logo.png";
import instagramLogo from "../../assets/images/instagram-logo.png";
import linkedinLogo from "../../assets/images/linkedin-logo.png";
import whatsappLogo from "../../assets/images/whatsapp-logo.png";
import styles from './Footer.module.css';
import SocialButton from "./SocialButton";

export default function Footer() {
    const socialItems = [
        { icon: instagramLogo, label: "Instagram" },
        { icon: linkedinLogo, label: "Linkedin" },
        { icon: whatsappLogo, label: "Whatsapp" },
        
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
                <h2 className="description text-sm text-white">{title}</h2>
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
        <section className={"main bg-main"}>
            <div className={"line"} />

            <div className={`containerMain ${styles.itemGap}`}>
                <div className={styles.grid}>
                    <div className={styles.subContainer}>
                        <div className={styles.logo}>
                            <img src={ziorLogo} alt="Logomarca da empresa" />
                        </div>

                        <p className={`${styles.centerText} text-xs text-muted`}>
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
                        <h2 className={"description text-sm text-white"}>
                            Contato
                        </h2>
                        <div className={styles.navColumn}>
                            <p className={"description text-xs text-muted"}>contato@zior.com.br</p>
                            <p className={"description text-xs text-muted"}>(11) 99999-9999</p>
                            <p className={"description text-xs text-muted"}>São Paulo, SP</p>
                            <p className={"description text-xs text-muted"}>Brasil</p>
                        </div>
                    </div>
                </div>

                <div className={"line"} />

                <div className={styles.footeregal}>
                    <h1 className={"description text-xs text-muted"}>
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