import styles from './CompanyStats.module.css';

type Item = {
  value: string;
  desc: string;
};

type Props = {
  list: Item[];
};

export default function CompanyStats({ list }: Props) {
  return (
    <section className={styles.companyStats}>
      {list.map((item, index) => (
        <div key={index} className={styles.item}>
          <p className={`${styles.value} text-emd`}>
            {item.value}
          </p>

          <p className="description text-xs color-txt-sec">
            {item.desc}
          </p>
        </div>
      ))}
    </section>
  );
}
