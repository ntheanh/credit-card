import { apple, bill, google } from "../assets";
import styles, { layout } from "../style";

const Billing = () => {
  return (
    <section>
      <div>
        <div>
          <img
            src={bill}
            alt="billing"
            className="w-[100%] h-[100%] relative z-[5]"
          />
        </div>
      </div>
    </section>
  );
};

export default Billing;