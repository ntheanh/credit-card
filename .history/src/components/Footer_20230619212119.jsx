import styles from "../style";
import { footerLinks, socialMedia } from "../constants";

const Footer = () => {
  return (
    <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
      <div className="flex-1 flex flex-row w-full justify-between flex-wrap min-w-[150px]">
        {footerLinks.map((footerLink) => (
          <div key={footerLink.title}>
            <h4 className="text-[18px] text-white font-poppins font-semibold w">
              {footerLink.title}
            </h4>
            <ul>
              {footerLink.links.map((link) => (
                <li key={link.name} className={styles.paragraph}>
                  {link.name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Footer;
