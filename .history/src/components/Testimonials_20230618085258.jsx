import { feedback } from "../constants";
import styles from "../style";
import FeedbackCard from "./FeedbackCard";

const Testimonials = () => {
  return (
    <section
      id="clients"
      className={`${styles.paddingY} ${styles.flexCenter} flex-col relative `}
    >
      <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-0 mb-6">
        <h2>What people are saying about us</h2>
      </div>
    </section>
  );
};

export default Testimonials;
