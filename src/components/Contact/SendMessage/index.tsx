import { TEXTS } from '../../../content/texts';
import HighlightButton from '../../ui/HighlightButton';
import styles from './SendMessage.module.css';

type ContactForm = {
    label: string;
    placeHolder: string;
    type: string;
}

type Props = {
    contact: ContactForm[];
}

export default function SendMessage({ contact }: Props) {
    return (
        <form className={`${styles.sendMessage} color-card-bg color-bd-main`}>


            {contact.map(({ label, placeHolder, type }) => {

                return (
                    <div className={styles.field}>
                        <label>{label}</label>
                        <input
                            type={type}
                            placeholder={placeHolder}
                            required
                        />
                    </div>
                )
            })}

            <HighlightButton name={TEXTS.contact.cta} onClick={() => console.log("asvasdvasdv")} />
        </form>
    );
}
