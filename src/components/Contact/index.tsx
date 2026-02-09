import Badge from "../ui/Badge";
import styles from "./Contact.module.css";
import ContactType from "./ContactType";
import WhatsappContact from "./WhatsappContact";
import { TEXTS } from "../../content/texts";
import { forwardRef } from "react";
import { motion } from 'framer-motion';

const Contact = forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <section ref={ref} className={"main color-bg-gradient"}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className={`containerMain ${styles.gridMode}`}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={styles.primaryColumn}>
          <Badge label={TEXTS.contact.badge} />

          <h1 className={"title color-txt-main text-el"}>
            {TEXTS.contact.title}
          </h1>

          <p className={"description color-txt-sec text-md"}>
            {TEXTS.contact.desc}
          </p>

          <ContactType contactList={TEXTS.contact.type} />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={styles.secondaryColumn}>
          <WhatsappContact
            title={TEXTS.contact.subTitle}
            desc={TEXTS.contact.subDesc}
            benefitsList={TEXTS.contact.benefit}
            ctaText={TEXTS.contact.cta}
            statusText={TEXTS.contact.status}
          />
        </motion.div>
      </motion.div>
    </section>
  );
});

Contact.displayName = "Contact";
export default Contact;
