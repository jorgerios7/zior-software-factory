import Badge from '../ui/Badge';
import styles from './Contact.module.css';
import contactImage from "../../assets/images/contact-image.png";
import ContactInfo from './ContactInfo';
import SendMessage from './SendMessage';

export default function Contact() {
    return (
        <section className={"main bg-primary"}>
            <div className={"containerMain columnMode"}>
                <div className={styles.contact}>
                    <Badge label={"Fale Conosco"} />
                    <h1 className={"title text-lg text-white"}>
                        Vamos conversar sobre seu <br />
                        projeto? <br />
                    </h1>
                    <p className={"description text-md text-muted"}>
                        Entre em contato e descubra como podemos transformar suas ideias em realidade.<br />
                    </p>
                </div>

                <div className={styles.gridView}>
                    <div className={styles.leftColumn}>
                        <ContactInfo
                            title="Informações de Contato"
                            email="contato@zior.com.br"
                            phone="(61) 9 8243-4750"
                            address="Santa Maria, DF - Brasil"
                        />

                        <div className={styles.imageWrapper}>
                            <img
                                src={contactImage}
                                alt="Ambiente de trabalho moderno"
                            />
                        </div>
                    </div>

                    <SendMessage />
                </div>
            </div>
        </section>
    )
}