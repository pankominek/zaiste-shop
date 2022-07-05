import { ReviewContentFragment } from "../../generated/graphql";

interface ProductReviewItemProps {
  review: ReviewContentFragment;
}

export const ProductReviewItem = ({ review }: ProductReviewItemProps) => {
  return (
    <li className="col-span-1 border-2 shadow bg-white p-4">
      <h3 className="font-bold">{review.headline}</h3>
      <div>{review.rating}</div>
      <p>{review.content}</p>
      <footer>{review.name}</footer>
    </li>
  );
};
