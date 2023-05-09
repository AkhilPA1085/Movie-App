import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "./style.scss";

const CircleRating = ({rating}) => {
  return (
    <CircularProgressbar
        value={rating}
        maxValue={10}
        text={rating}
        styles={buildStyles({
          pathColor: rating < 5 ? "red" : rating < 7 ? "orange" : "green",
          textColor: '#bfbfbf',
          textSize:'34px'
        })}
    />
  );
};

export default CircleRating;
