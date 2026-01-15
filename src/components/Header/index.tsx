import HighlightButton from '../ui/HighlightButton';
import styles from './Header.module.css';
import ziorLogo from "../../assets/images/zior-logo.png";

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
            <button>Início</button>
            <button>Serviços</button>
            <button>Sobre</button>
          </nav>

          {/* CTA */}
          <HighlightButton
            name={"Fale Conosco"}
            onClick={() => console.log("Fale conosco foi clicado!")}
          />
        </div>
      </div>
    </section>
  );
}
