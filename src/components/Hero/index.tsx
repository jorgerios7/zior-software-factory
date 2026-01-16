import styles from './Hero.module.css';
import heroImage from "../../assets/images/hero-image.png";
import HighlightButton from '../ui/HighlightButton';
import Button from './Button';
import Badge from '../ui/Badge';
import { TEXTS } from '../../content/texts';
import { forwardRef } from 'react';

const Hero = forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <section ref={ref} className={`main bg-main-gradient ${styles.paddingTop}`}>
      <div className={"containerMain gridMode"}>

        <div className={styles.content}>

          <Badge label={TEXTS.hero.badge} />

          <h1 className={"title color-txt-main text-elg"}>
            {TEXTS.hero.title.a} <br />
            {TEXTS.hero.title.b} <br />
            <span>{TEXTS.hero.title.c}</span>
          </h1>

          <p className={"description color-txt-sec text-md"}>
            {TEXTS.hero.desc}
          </p>

          <div className={styles.actions}>
            <HighlightButton
              name={TEXTS.hero.bt.cta}
              onClick={() => { console.log("Orçamento solicitado!") }}
            />

            <Button
              name={TEXTS.hero.bt.features}
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
})

Hero.displayName = 'Hero'
export default Hero;
