import styles from './About.module.css';
import heroImage from "../../assets/images/about-image.png";
import Badge from '../ui/Badge';
import Strengths from './Strengths';
import CompanyStats from './CompanyStats';
import { TEXTS } from '../../content/texts';

export default function About() {
    return (
        <section className={"main bg-main-gradient"}>
            <div className={"containerMain gridMode"}>
                {/* Imagem */}
                <div className={styles.imageWrapper}>
                    <img src={heroImage} alt="Ambiente de trabalho moderno" />
                </div>

                {/* Conteúdo textual */}
                <div className={styles.content}>
                    <Badge label={TEXTS.about.badge} />

                    <h1 className={"title text-lg color-txt-main"}>
                        {TEXTS.about.title.a}<br />
                        {TEXTS.about.title.b}<br />
                    </h1>

                    <p className={"description text-md color-txt-sec"}>
                        {TEXTS.about.desc}
                    </p>

                    <p className={"description text-sm color-txt-sec"}>
                        {TEXTS.about.subDesc}
                    </p>
                    
                    <Strengths desc={TEXTS.about.strengths} />

                    <div className={"line"} />

                    <CompanyStats list={TEXTS.about.stats} />
                    
                </div>
            </div>
        </section>
    );
}
