interface RatingProps {
  rating: number;
}

export const Rating = ({ rating }: RatingProps) => {
  return <small>Rating: {rating}</small>;
};
