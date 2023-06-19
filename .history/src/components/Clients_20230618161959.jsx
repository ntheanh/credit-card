import { clients } from "../constants";
import styles from "../style";

const Clients = () => {
  return (
    <section className={`${styles.flexCenter} my-4`}>
      <div>
        {clients.map((client) => (
          <div key={client.id}>
            <img src={client.logo} alt="client" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Clients;
