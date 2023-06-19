import styles from "../style";
import { footerLinks, socialMedia } from "../constants";

const Footer = () => {
  return (
    <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
      <div className="flex-1 flex flex-col">
        {footerLinks.map((footerLink) => (
          <h4></h4>
        ))}
      </div>
    </section>
  );
};

export default Footer;
