import styles from "../style";
import { footerLinks, socialMedia } from "../constants";

const Footer = () => {
  return (
    <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
      <div className="">
        <h3 className={styles.paragraph}>
          A new way to make the payments easy, reliable and secure.
        </h3>
      </div>

      <div className="flex sm:flex-row flex-col mr-5 ">
        {footerLinks.map((footerLink) => (
          <div key={footerLink.title}>
            <h4 className="text-white">{footerLink.title}</h4>
            <ul>
              {footerLink.links.map((link) => (
                <li key={link.name}>
                {link.name}
                </li>
              )}
            </ul>
          </div>
        ))}
      </div>

      <div>Community</div>
    </section>
  );
};

export default Footer;
