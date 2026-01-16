import HighlightButton from '../ui/HighlightButton';
import styles from './Header.module.css';
import ziorLogo from "../../assets/images/zior_tecnologia-logo2.png";
import { TEXTS } from '../../content/texts';

type Props = {
  onHero: () => void;
  onFeatures: () => void;
  onAbout: () => void;
  onContact: () => void;
}

export default function Header({
  onHero,
  onFeatures,
  onAbout,
  onContact
}: Props) {
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
            <button onClick={onHero}>{TEXTS.header.bt_hero}</button>
            <button onClick={onFeatures}>{TEXTS.header.bt_features}</button>
            <button onClick={onAbout}>{TEXTS.header.bt_about}</button>
          </nav>

          {/* CTA */}
          <HighlightButton
            name={TEXTS.header.cta}
            onClick={onContact}
          />
        </div>
      </div>
    </section>
  );
}
