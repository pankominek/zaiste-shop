interface RatingProps {
  rating: number;
}

export const Rating = ({ rating }: RatingProps) => {
  return (
    <p>
      Rating: <span className="font-bold">{rating}</span>
    </p>
  );
};
