import { quotes } from "../assets";

const FeedbackCard = ({ content, name, title, img }) => {
  return (
    <div className="flex justify-between flex-col px-10 py-12 rounded-[20px] max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card ">
      <img src={quotes} alt="" className="w-[42px h-[27px] object-contain" />
      <p className="">{content}</p>

      <div>
        <img src={img} alt="" className="" />
        <div>
          <h4>{name}</h4>
          <p>{title}</p>
        </div>
      </div>
    </div>
  );
};

export default FeedbackCard;
