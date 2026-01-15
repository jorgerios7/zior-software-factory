import { Mail, Phone, MapPin } from 'lucide-react';
import styles from './ContactInfo.module.css';

type ContactInfo = {
    icon: React.ReactNode;
    label: string;
    value: string;
};

type Props = {
    title: string;
    email: string;
    phone: string;
    address: string;
};

export default function ContactInfo({ title, email, phone, address }: Props) {
    const items: ContactInfo[] = [
        { label: 'Email', value: email, icon: <Mail size={24} /> },
        { label: 'Telefone', value: phone, icon: <Phone size={24} /> },
        { label: 'Localização', value: address, icon: <MapPin size={24} /> },
    ];

    return (
        <section className={`${styles.contactItem} bg-container bd-color`}>
            <h1 className="description text-white text-md">
                {title}
            </h1>

            {items.map(({ icon, label, value }) => (
                <div key={label} className={styles.subItem}>
                    <div className="iconWrapper">
                        {icon}
                    </div>

                    <div className={styles.containerText}>
                        <p className="description text-xs text-muted">
                            {label}
                        </p>
                        <p className="description text-esm text-white">
                            {value}
                        </p>
                    </div>
                </div>
            ))}
        </section>
    );
}
