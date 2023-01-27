import { AiOutlineStar } from "react-icons/ai";
import { AiFillStar } from "react-icons/ai";
import styles from "./starRating.module.css";
import { useState } from "react";

const StarRating = () => {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);
  return (
    <div>
      {[...Array(5)].map((star, i) => {
        const ratingValue = i + 1;

        return (
          <label className={styles.estrelas}>
            <input
              type="radio"
              name="rating"
              value={ratingValue}
              onClick={() => setRating(ratingValue)}

            />
            <AiFillStar
              className={styles.estrela}
              size={25}
              color={ratingValue <= (hover || rating) ? "yellow" : "grey"}
              onMouseEnter={() => setHover(ratingValue)}
              onMouseLeave={() => setHover(null)}
            />
          </label>
        );
      })}
    </div>
  );
};

export default StarRating;
