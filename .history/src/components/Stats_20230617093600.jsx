import styles from "../style";
import stats from "../constants";

const Stats = () => {
  return (
    <section>
      {stats.map((stat) => (
        <div key={stat.id}>
          <h4>{stat.value}</h4>
        </div>
      ))}
    </section>
  );
};

export default Stats;
