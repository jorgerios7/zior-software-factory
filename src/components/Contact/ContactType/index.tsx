import { Mail, Phone, MapPin } from 'lucide-react';
import styles from './ContactType.module.css';

type IconKey = 'mail' | 'phone' | 'map';

export type Contact = {
    name: string;
    value: string;
    icon: IconKey;
};

type Props = {
    contactList: Contact[];
};

export default function ContactType({ contactList }: Props) {
    const ICONS = {
        mail: Mail,
        phone: Phone,
        map: MapPin,
    } as const;

    return (
        <section className={`${styles.contactItem} color-card-bg color-bd-main`}>
            {contactList.map(({ name, value, icon }) => {
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
