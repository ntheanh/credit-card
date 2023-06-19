// eslint-disable-next-line react/prop-types
const Button = ({ styles }) => {
  return (
    <button
      className={`py-4 px-6 font-poppins font-medium transition duration-200 hover:bg-blue-gradient rounded-[10px] text-[18px] outline-none text-white ${styles}`}
    >
      Get Started
    </button>
  );
};

export default Button;
