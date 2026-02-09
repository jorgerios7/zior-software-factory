import styles from "./LegalView.module.css";

type LegalProps = {
  title?: string;
  text: string;
};

type Props = {
  legalList: LegalProps[];
};

const LegalView = ({ legalList }: Props) => {
  return (
    <section className={styles.containerMain}>
      {legalList.map((term, index) => (
        <section key={index}>
          {term.title && (
            <h3 className={"title text-md color-txt-sec"}>{term.title}</h3>
          )}
          <p className={"description text-xs color-txt-main"}>{term.text}</p>
        </section>
      ))}
    </section>
  );
};

export default LegalView;
