import styles from "../style";
import { footerLinks, socialMedia } from "../constants";

const Footer = () => {
  return (
    <section className={`${styles.flexCenter} ${styles.padding} flex-col`}>
      <div className="">
        <h3 className={styles.paragraph}>
          A new way to make the payments easy, reliable and secure.
        </h3>
      </div>

      <div className="flex sm:flex-row flex-col mr-5 ">
        {footerLinks.map((footerLink) => (
          <div key={footerLink.title}>
            <h3 className="text-white">{footerLink.title}</h3>
            <h4 className={styles.paragraph}>{}</h4>
          </div>
        ))}
      </div>

      <div>Community</div>
    </section>
  );
};

export default Footer;
