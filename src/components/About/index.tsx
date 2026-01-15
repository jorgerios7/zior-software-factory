import styles from './About.module.css';
import heroImage from "../../assets/images/about-image.png";
import Badge from '../ui/Badge';
import StrengthsItem from './StrengthsItem';
import StatsItem from './StatsItem';

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
                    <Badge label={"Sobre a Zior"} />

                    <h1 className={"title text-lg color-txt-main"}>
                        Tecnologia que impulsiona<br />
                        resultados<br />
                    </h1>

                    <p className={"description text-md color-txt-sec"}>
                        A Zior é especializada em desenvolver soluções tecnológicas para
                        micro e pequenas empresas que desejam se destacar no mercado digital.
                    </p>

                    <p className={"description text-sm color-txt-sec"}>
                        Nossa missão é tornar a tecnologia acessível e eficiente,
                        oferecendo serviços de qualidade com atendimento personalizado.
                        Acreditamos que toda empresa, independente do tamanho,
                        merece ter acesso às melhores ferramentas digitais.
                    </p>

                    <div className={styles.listView}>
                        <StrengthsItem description={"Soluções personalizadas para cada negócio"} />

                        <StrengthsItem description={"Prazos de entrega respeitados"} />

                        <StrengthsItem description={"Suporte técnico contínuo"} />

                        <StrengthsItem description={"Equipe especializada e certificada"} />

                        <StrengthsItem description={"Preços justos e transparentes"} />

                        <StrengthsItem description={"Tecnologias modernas e atualizadas"} />
                    </div>

                    <div className={"line"} />

                    <div className={styles.companyStats}>
                        <StatsItem value={"50+"} label={"Projetos Entregues"} />

                        <StatsItem value={"98%"} label={"Clientes Satisfeitos"} />

                        <StatsItem value={"5+"} label={"Anos de Experiência"} />

                        <StatsItem value={"24/7"} label={"Suporte Disponível"} />
                    </div>
                </div>
            </div>
        </section>
    );
}
