import styles from "../style";
import { footerLinks, socialMedia } from "../constants";

const Footer = () => {
  return (
    <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
      <div className="flex-[1.5] flex flex-row w-full justify-between flex-wrap min-w-[150px] md:mt-0 mt-10">
        {footerLinks.map((footerLink) => (
          <div key={footerLink.title}>
            <h4 className="text-[18px] text-white font-poppins font-semibold w leading-[30px]">
              {footerLink.title}
            </h4>
            <ul className="list-none mt-4">
              {footerLink.links.map((link) => (
                <li
                  key={link.name}
                  className="text-[16px] text-dimWhite font-poppins font-normal w leading-[25px]"
                >
                  {link.name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div>
        <p>Copyright &copy; 2023 All Rights Reserved. </p>

        <div>
          {socialMedia.map((social, index) => (
            <img src={social.icon} alt="" />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Footer;
