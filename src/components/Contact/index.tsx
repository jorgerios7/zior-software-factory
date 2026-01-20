import Badge from '../ui/Badge';
import styles from './Contact.module.css';
import ContactType from './ContactType';
import WhatsappContact from './WhatsappContact';
import { TEXTS } from '../../content/texts';
import { forwardRef } from 'react';

const Contact = forwardRef<HTMLDivElement>((_, ref) => {
    return (
        <section ref={ref} className={"main color-bg-gradient"}>
            <div className={`containerMain ${styles.gridMode}`}>
                <div className={styles.primaryColumn}>
                    <Badge label={TEXTS.contact.badge} />

                    <h1 className={"title color-txt-main text-el"}>
                        {TEXTS.contact.title}
                    </h1>

                    <p className={"description color-txt-sec text-md"}>
                        {TEXTS.contact.desc}
                    </p>

                    <ContactType contactList={TEXTS.contact.type} />
                </div>
                <div className={styles.secondaryColumn}>
                    <WhatsappContact
                        title={TEXTS.contact.subTitle}
                        desc={TEXTS.contact.subDesc}
                        benefitsList={TEXTS.contact.benefit}
                        ctaText={TEXTS.contact.cta}
                        statusText={TEXTS.contact.status}
                    />
                </div>
            </div>
        </section>
    )
})

Contact.displayName = 'Contact'
export default Contact;