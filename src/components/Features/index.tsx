import { forwardRef } from "react";
import { TEXTS } from "../../content/texts";
import Badge from "../ui/Badge";
import FeatureItem from "./FeatureItem";
import styles from "./Features.module.css";
import { motion } from 'framer-motion';
import {
  Smartphone,
  Code,
  Cloud,
  BriefcaseBusiness,
  Shield,
  Headset,
} from "lucide-react";

const Features = forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <section ref={ref} className={"main color-bg-gradient"}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className={"containerMain columnMode"}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={styles.header}>
          <Badge label={TEXTS.features.badge} />

          <h1 className={"title text-lg color-txt-main"}>
            {TEXTS.features.title}
          </h1>

          <p className={"description text-md color-txt-sec"}>
            {TEXTS.features.desc}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={styles.featuresList}>
          <FeatureItem
            icon={<Code size={28} />}
            title={TEXTS.features.services.webDevelopment.title}
            description={TEXTS.features.services.webDevelopment.desc}
          />

          <FeatureItem
            icon={<Smartphone size={28} />}
            title={TEXTS.features.services.mobileDevelopment.title}
            description={TEXTS.features.services.mobileDevelopment.desc}
          />

          <FeatureItem
            icon={<Cloud size={28} />}
            title={TEXTS.features.services.cloudComputing.title}
            description={TEXTS.features.services.cloudComputing.desc}
          />

          <FeatureItem
            icon={<BriefcaseBusiness size={28} />}
            title={TEXTS.features.services.businessIntelligence.title}
            description={TEXTS.features.services.businessIntelligence.desc}
          />

          <FeatureItem
            icon={<Shield size={28} />}
            title={TEXTS.features.services.digitalSecurity.title}
            description={TEXTS.features.services.digitalSecurity.desc}
          />

          <FeatureItem
            icon={<Headset size={28} />}
            title={TEXTS.features.services.technicalSupport.title}
            description={TEXTS.features.services.technicalSupport.desc}
          />
        </motion.div>
      </motion.div>
    </section>
  );
});

Features.displayName = "Features";
export default Features;
