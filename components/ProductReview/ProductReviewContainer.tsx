import { ProductReviewForm } from "./ProductReviewForm";
import { ProductReviewList } from "./ProductReviewList";

interface ProductReviewContainerProps {
  productSlug: string;
}

export const ProductReviewContainer = ({
  productSlug,
}: ProductReviewContainerProps) => {
  return (
    <div className="col-span-full grid grid-cols-2 gap-4">
      <ProductReviewList productSlug={productSlug} />
      <ProductReviewForm />
    </div>
  );
};
