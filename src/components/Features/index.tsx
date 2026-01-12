import Badge from '../ui/Badge';
import FeatureItem from './FeatureItem';
import styles from './Features.module.css';
import { Smartphone, Code, Cloud, BriefcaseBusiness, Shield, Headset } from "lucide-react";

export default function Features() {
    return (
        <section className={styles.features}>

            <div className={styles.header}>

                <Badge label={"O que fazemos"} />

                <h1 className={"title"}>
                    Soluções completas para sua <br />
                    empresa <br />
                </h1>

                <p className={"paimaryDescription"}>
                    Oferecemos serviços de tecnologia personalizados para impulsionar o crescimento do<br />
                    seu negócio.<br />
                </p>
            </div>

            <div className={styles.featuresList}>

                <FeatureItem
                    icon={<Code size={24}/>}
                    title="Desenvolvimento Web"
                    description="Sites e sistemas web personalizados, responsivos e otimizados para seu negócio crescer online."
                />

                <FeatureItem
                    icon={<Smartphone size={24} />}
                    title="Aplicativos Mobile"
                    description="Apps nativos e híbridos para Android e iOS, com design intuitivo e performance excepcional."
                />

                <FeatureItem
                    icon={<Cloud size={30} />}
                    title="Cloud Computing"
                    description="Migração e gestão de infraestrutura em nuvem para maior segurança e escalabilidade."
                />

                <FeatureItem
                    icon={<BriefcaseBusiness size={24} />}
                    title="Business Intelligence"
                    description="Análise de dados e dashboards inteligentes para tomada de decisões estratégicas."
                />

                <FeatureItem
                    icon={<Shield size={24} />}
                    title="Segurança Digital"
                    description="Proteção de dados, backup automático e implementação de melhores práticas de segurança."
                />

                <FeatureItem
                    icon={<Headset size={28} />}
                    title="Suporte Técnico"
                    description="Atendimento personalizado e suporte contínuo para garantir o funcionamento perfeito."
                />


            </div>

        </section>
    )
}