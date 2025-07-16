import { Icon } from "@iconify/react/dist/iconify.js";

const StarRating = ({ count = 0, totalStars = 5, color = "#F59E0B" }) => {
  return (
    <div className="flex">
      {[...Array(totalStars)].map((_, index) => {
        const ratingValue = index + 1;
        return (
          <Icon
            key={index}
            icon={
              ratingValue <= count
                ? "fluent:star-32-filled"
                : ratingValue - 0.5 === count
                ? "fluent:star-half-12-regular"
                : "fluent:star-32-regular"
            }
            width="24"
            height="24"
            style={{ color: color }}
          />
        );
      })}
    </div>
  );
};

export default StarRating;
