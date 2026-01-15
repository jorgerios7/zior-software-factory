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
        <section className={`${styles.contactItem} color-card-bg color-bd-main`}>
            <h1 className="description color-txt-main text-md">
                {title}
            </h1>

            {items.map(({ icon, label, value }) => (
                <div key={label} className={styles.subItem}>
                    <div className="iconWrapper">
                        {icon}
                    </div>

                    <div className={styles.containerText}>
                        <p className="description text-xs color-txt-sec">
                            {label}
                        </p>
                        <p className="description text-esm color-txt-main">
                            {value}
                        </p>
                    </div>
                </div>
            ))}
        </section>
    );
}
