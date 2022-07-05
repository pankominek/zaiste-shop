import * as yup from "yup";

import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { FormInput } from "../FormInput";

const reviewFormSchema = yup
  .object({
    content: yup.string().required(),
    headline: yup.string().required(),
    name: yup.string().required(),
    rating: yup.number().min(1).max(5).required(),
  })
  .required();

type ReviewFormData = yup.InferType<typeof reviewFormSchema>;

export const ProductReviewForm = () => {
  const { register, handleSubmit } = useForm<ReviewFormData>({
    resolver: yupResolver(reviewFormSchema),
  });

  const onSubmit = handleSubmit((data) => mutate(data));

  return (
    <form
      onSubmit={onSubmit}
      className="border-2 shadow bg-white p-4 grid grid-cols-6 gap-6"
    >
      <div className="col-span-6 sm:col-span-3">
        <FormInput
          name="headline"
          label={"Headline"}
          register={register}
          type="text"
        />
      </div>
      <div className="col-span-6 sm:col-span-3">
        <FormInput
          name="content"
          label={"Your review"}
          register={register}
          type="text"
        />
      </div>
      <div className="col-span-6 sm:col-span-3">
        <FormInput
          name="name"
          label={"Your name"}
          register={register}
          type="text"
        />
      </div>
      <div className="col-span-6 sm:col-span-3">
        <FormInput
          name="rating"
          label={"Rating"}
          register={register}
          type="number"
        />
      </div>
      <div className="col-span-full flex justify-center">
        <button
          type="submit"
          className=" py-2 px-4 text-white bg-indigo-600 hover:bg-indigo-700"
        >
          Add comment
        </button>
      </div>
    </form>
  );
};
