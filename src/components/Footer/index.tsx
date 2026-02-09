import zior_tecnologiaLogo from "../../assets/images/zior_tecnologia-logo.png";
import instagramLogo from "../../assets/images/instagram-logo.png";
import linkedinLogo from "../../assets/images/linkedin-logo.png";
import whatsappLogo from "../../assets/images/whatsapp-logo.png";
import facebookLogo from "../../assets/images/facebook-logo.png";
import xLogo from "../../assets/images/x-logo.png";
import styles from "./Footer.module.css";
import SocialButton from "./SocialButton";
import { TEXTS } from "../../content/texts";
import NavSection from "./NavSection";
import RowContacts from "./RowContacts";
import { LINKS } from "../../content/links";

type Props = {
  onFeatures: () => void;
  onPrivacyPolicy: () => void;
  onTerms: () => void;
};

export default function Footer({
  onFeatures,
  onPrivacyPolicy,
  onTerms,
}: Props) {
  const socialItems = [
    { icon: xLogo, url: LINKS.social.x },
    { icon: instagramLogo, url: LINKS.social.intagram },
    { icon: linkedinLogo, url: LINKS.social.linkedin },
    { icon: whatsappLogo, url: LINKS.social.whatsapp },
    { icon: facebookLogo, url: LINKS.social.facebook },
  ];

  return (
    <section className={"main color-bg-main"}>
      <div className={`containerMain ${styles.itemGap}`}>
        <div className={styles.grid}>
          <div className={styles.subContainer}>
            <div className={styles.logo}>
              <img src={zior_tecnologiaLogo} alt="Logomarca da empresa" />
            </div>

            <p className={`${styles.text} text-xs color-bg-main`}>
              {TEXTS.footer.desc}
            </p>

            <div className={styles.recyclerItem}>
              {socialItems.map(({ icon, url }) => (
                <SocialButton url={url} icon={icon} />
              ))}
            </div>
          </div>

          <NavSection list={TEXTS.footer.features} onClick={onFeatures} />

          <NavSection list={TEXTS.footer.company} />

          <RowContacts list={TEXTS.footer.contact} />
        </div>

        <div className={"line"} />

        <div className={styles.footerLegal}>
          <h1 className={"description text-xs color-txt-sec"}>
            {TEXTS.footer.rights}
          </h1>

          <div className={styles.navRow}>
            <button onClick={onPrivacyPolicy}>
              {TEXTS.footer.legal.privacyPolicy}
            </button>
            <button onClick={onTerms}>
              {TEXTS.footer.legal.terms}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
