import { Mail, Phone, MapPin } from 'lucide-react';
import styles from './ContactType.module.css';

type IconKey = 'mail' | 'phone' | 'map';

export type Contact = {
    name: string;
    value: string;
    icon: IconKey;
};

type Props = {
    title: string;
    contact: Contact[];
};

export default function ContactType({ title, contact }: Props) {
    const ICONS = {
        mail: Mail,
        phone: Phone,
        map: MapPin,
    } as const;

    return (
        <section className={`${styles.contactItem} color-card-bg color-bd-main`}>
            <h1 className="description color-txt-main text-md">
                {title}
            </h1>

            {contact.map(({ name, value, icon }) => {
                const Icon = ICONS[icon];

                return (
                    <div key={name} className={styles.subItem}>
                        <div className={styles.iconWrapper}>
                            <Icon size={21} />
                        </div>

                        <div className={styles.containerText}>
                            <p className="description text-xs color-txt-sec">
                                {name}
                            </p>
                            <p className="description text-esm color-txt-main">
                                {value}
                            </p>
                        </div>
                    </div>
                );
            })}
        </section>
    );
}
