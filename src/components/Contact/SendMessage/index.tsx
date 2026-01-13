import HighlightButton from '../../ui/HighlightButton';
import styles from './SendMessage.module.css';

export default function SendMessage() {
    return (
        <form className={`${styles.sendMessage} bg-container bd-color`}>
            <div className={styles.field}>
                <label>Nome completo *</label>
                <input
                    type="text"
                    placeholder="Seu nome"
                    required
                />
            </div>

            <div className={styles.field}>
                <label>Email *</label>
                <input
                    type="email"
                    placeholder="seu@email.com"
                    required
                />
            </div>

            <div className={styles.field}>
                <label>Telefone</label>
                <input
                    type="tel"
                    placeholder="(11) 99999-9999"
                />
            </div>

            <div className={styles.field}>
                <label>Mensagem *</label>
                <textarea
                    placeholder="Conte-nos sobre seu projeto..."
                    required
                />
            </div>

            <HighlightButton name='Enviar Mensagem' onClick={() => console.log("asvasdvasdv")}/>
        </form>
    );
}
