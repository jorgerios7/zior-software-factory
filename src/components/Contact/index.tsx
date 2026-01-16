import Badge from '../ui/Badge';
import styles from './Contact.module.css';
import contactImage from "../../assets/images/contact-image.png";
import ContactType from './ContactType';
import SendMessage from './SendMessage';
import { TEXTS } from '../../content/texts';
import { forwardRef } from 'react';

const Contact = forwardRef<HTMLDivElement>((_, ref) => {
    return (
        <section ref={ref} className={"main color-bg-gradient"}>
            <div className={"containerMain columnMode"}>
                <div className={styles.contact}>
                    <Badge label={TEXTS.contact.badge} />
                    <h1 className={"title text-lg color-txt-main"}>
                        {TEXTS.contact.title.a} <br />
                        {TEXTS.contact.title.b} <br />
                    </h1>
                    <p className={"description text-md color-txt-sec"}>
                        {TEXTS.contact.desc}
                    </p>
                </div>

                <div className={styles.gridView}>
                    <div className={styles.leftColumn}>
                        <ContactType
                            title={TEXTS.contact.titleType}
                            contact={TEXTS.contact.type}
                            
                        />

                        <div className={styles.imageWrapper}>
                            <img
                                src={contactImage}
                                alt="Ambiente de trabalho moderno"
                            />
                        </div>
                    </div>

                    <SendMessage contact={TEXTS.contact.contactForm} />
                </div>
            </div>
        </section>
    )
})

Contact.displayName = 'Contact'
export default Contact;