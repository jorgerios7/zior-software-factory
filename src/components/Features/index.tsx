import { forwardRef } from 'react';
import { TEXTS } from '../../content/texts';
import Badge from '../ui/Badge';
import FeatureItem from './FeatureItem';
import styles from './Features.module.css';
import { Smartphone, Code, Cloud, BriefcaseBusiness, Shield, Headset } from "lucide-react";

const Features = forwardRef<HTMLDivElement>((_, ref) => {
    return (
        <section ref={ref} className={"main color-bg-gradient"}>
            <div className={"containerMain columnMode"}>

                <div className={styles.header}>
                    <Badge label={TEXTS.features.badge} />

                    <h1 className={"title text-lg color-txt-main"}>
                        {TEXTS.features.title}
                    </h1>

                    <p className={"description text-md color-txt-sec"}>
                        {TEXTS.features.desc}
                    </p>
                </div>

                <div className={styles.featuresList}>
                    <FeatureItem
                        icon={<Code size={24} />}
                        title={TEXTS.features.services.webDevelopment.title}
                        description={TEXTS.features.services.webDevelopment.desc}
                    />

                    <FeatureItem
                        icon={<Smartphone size={24} />}
                        title={TEXTS.features.services.mobileDevelopment.title}
                        description={TEXTS.features.services.mobileDevelopment.desc}
                    />

                    <FeatureItem
                        icon={<Cloud size={30} />}
                        title={TEXTS.features.services.cloudComputing.title}
                        description={TEXTS.features.services.cloudComputing.desc}
                    />

                    <FeatureItem
                        icon={<BriefcaseBusiness size={24} />}
                        title={TEXTS.features.services.businessIntelligence.title}
                        description={TEXTS.features.services.businessIntelligence.desc}
                    />

                    <FeatureItem
                        icon={<Shield size={24} />}
                        title={TEXTS.features.services.digitalSecurity.title}
                        description={TEXTS.features.services.digitalSecurity.desc}
                    />

                    <FeatureItem
                        icon={<Headset size={28} />}
                        title={TEXTS.features.services.technicalSupport.title}
                        description={TEXTS.features.services.technicalSupport.desc}
                    />
                </div>

            </div>
        </section>
    )
})

Features.displayName = 'Features'
export default Features;