import styles from './Hero.module.css';
import heroImage from "../../assets/images/hero-image.png";
import HighlightButton from '../ui/HighlightButton';
import Button from './Button';
import Badge from '../ui/Badge';

export default function Hero() {
  return (
    <section className={`${styles.paddingTop} main bg-main-gradient`}>
      <div className={"containerMain gridMode"}>

        <div className={styles.content}>

          <Badge label={"Soluções em Tecnologia"} />

          <h1 className={"title color-txt-main text-elg"}>
            Transforme seu <br />
            negócio com <br />
            <span>tecnologia</span>
          </h1>

          <p className={"description color-txt-sec text-md"}>
            Desenvolvemos soluções tecnológicas personalizadas para micro e
            pequenas empresas que querem crescer no mundo digital.
          </p>

          <div className={styles.actions}>
            <HighlightButton
              name={"Solicitar Orçamento →"}
              onClick={() => { console.log("Orçamento solicitado!") }}
            />

            <Button
              name={"Nossos Serviços"}
              onClick={() => console.log("Nossos serviços foi clicado!")}
            />
          </div>
        </div>

        {/* Imagem */}
        <div className={"imageWrapper"}>
          <img src={heroImage} alt="Ambiente de trabalho moderno" />
        </div> 

      </div>
    </section>
  );
}
