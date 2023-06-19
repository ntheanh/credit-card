import styles from "../style";
import { stats } from "../constants";

const Stats = () => {
  return (
    <section className={`${styles.flexCenter} flex-row flex-wrap mb-6 `}>
      {stats.map((stat) => (
        <div
          key={stat.id}
          className="flex-1 flex justify-center items-center flex-row m-3"
        >
          <h4 className="font-poppins font-semibold text-white text-[40px]">
            {stat.value}
          </h4>
          <p className="text-gradient">{stat.title}</p>
        </div>
      ))}
    </section>
  );
};

export default Stats;
