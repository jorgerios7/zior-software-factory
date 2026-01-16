import HighlightButton from '../ui/HighlightButton';
import styles from './Header.module.css';
import ziorLogo from "../../assets/images/zior_tecnologia-logo2.png";
import { TEXTS } from '../../content/texts';

export default function Header() {
  return (
    <section className={"main"}>
      <div className={styles.header}>
        {/* Logo */}
        <div className={styles.logo}>
          <img src={ziorLogo} alt="Logomarca da empresa" />
        </div>

        {/* Buttons */}
        <div className={styles.buttonContainer}>

          {/* Menu */}
          <nav className={styles.navRow}>
            <button>{TEXTS.header.bt_hero}</button>
            <button>{TEXTS.header.bt_features}</button>
            <button>{TEXTS.header.bt_about}</button>
          </nav>

          {/* CTA */}
          <HighlightButton
            name={TEXTS.header.cta}
            onClick={() => console.log("Fale conosco foi clicado!")}
          />
        </div>
      </div>
    </section>
  );
}
