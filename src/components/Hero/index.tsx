import styles from "./Hero.module.css";
import heroImage from "../../assets/images/hero-image.png";
import HighlightButton from "../ui/HighlightButton";
import Button from "./Button";
import Badge from "../ui/Badge";
import { TEXTS } from "../../content/texts";
import { forwardRef } from "react";
import { motion } from 'framer-motion';

type Props = {
  onContact: () => void;
  onFeatures: () => void;
};

const Hero = forwardRef<HTMLDivElement, Props>(
  ({ onContact, onFeatures }, ref) => {
    return (
      <section
        ref={ref}
        className={`main bg-main-gradient ${styles.paddingTop}`}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className={"containerMain gridMode"}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className={styles.content}
          >
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
              <HighlightButton name={TEXTS.hero.bt.cta} onClick={onContact} />

              <Button name={TEXTS.hero.bt.features} onClick={onFeatures} />
            </div>
          </motion.div>

          {/* Imagem */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className={"imageWrapper"}>
            <img src={heroImage} alt="Ambiente de trabalho moderno" />
          </motion.div>
        </motion.div>
      </section>
    );
  }
);

Hero.displayName = "Hero";
export default Hero;
