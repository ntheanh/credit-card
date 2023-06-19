import styles from "../style";
import { footerLinks, socialMedia } from "../constants";

const Footer = () => {
  return (
    <section
      className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col`}
    >
      <div>
        <h3>A new way to make the payments easy, reliable and secure.</h3>
      </div>

      <div>
        {footerLinks.map((footerLink) => (
          <div key={footerLink.title}>
            <h3 className="text-white">{footerLink.title}</h3>
            <h4 className={styles.paragraph}>{footerLink.links}</h4>
          </div>
        ))}
      </div>

      <div>Community</div>
    </section>
  );
};

export default Footer;
