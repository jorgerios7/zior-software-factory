import HighlightButton from '../ui/HighlightButton';
import styles from './Header.module.css';

export default function Header() {
  return (
    <section className={"main"}>
      <div className={styles.header}>
        {/* Logo */}
        <div className={styles.logo}>
          <span>Z</span>
        </div>

        {/* Buttons */}
        <div className={styles.buttonContainer}>

          {/* Menu */}
          <nav className={styles.nav}>
            <button>Início</button>
            <button>Serviços</button>
            <button>Sobre</button>
            <button>Contato</button>
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
