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
                  className="text-[16px] text-dimWhite font-poppins font-normal w leading-[25px] hover:text-secondary cursor-pointer"
                >
                  {link.name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="w-full flex justify-between items-center md:flex-row flex-col">
        <p
          className={`${styles.paragraph} text-[18px] font-poppins font-normal text-center leading-[25px]`}
        >
          Copyright &copy; 2023 All Rights Reserved.{" "}
        </p>

        <div className="flex flex-row mt-6 md:mt-0">
          {socialMedia.map((social, index) => (
            <img
              key={social.id}
              src={social.icon}
              alt={social.id}
              className="w-[20px] h-[20px] object-contain cursor-pointer"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Footer;
