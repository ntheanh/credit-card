import styles from "../style";
import { footerLinks, socialMedia } from "../constants";

const Footer = () => {
  return (
    <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
      <div className="flex-1 flex flex-col">
        {footerLinks.map((footerLink) => (
          <div key={footerLink.title}>
            <h4 className={`${styles.heading2}`}>{footerLink.title}</h4>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Footer;
