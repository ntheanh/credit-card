// eslint-disable-next-line react/prop-types
const Button = ({ styles }) => {
  return (
    // <button
    //   className={`py-4 px-6 font-poppins font-medium bg-blue-gradient rounded-[10px] text-[18px] outline-none text-primary ${styles}`}
    // >
    //   Get Started
    // </button>
    <button className="relative inline-flex items-center justify-center   text-sm font-medium text-primary rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
      <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
        Cyan to blue
      </span>
    </button>
  );
};

export default Button;

{
  /* <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
  <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
    Cyan to blue
  </span>
</button>; */
}
