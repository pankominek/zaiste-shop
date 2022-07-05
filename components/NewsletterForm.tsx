import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useMutation } from "react-query";
import * as yup from "yup";
import { FormInput } from "./FormInput";

type CheckoutFormData = yup.InferType<typeof checkoutFormSchema>;

const useAddToNewsletterMutation = () =>
  useMutation("add-to-newsletter", async ({ email }: { email: string }) => {
    await fetch(`http://localhost:3000/api/hello`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
      }),
    });
  });

const checkoutFormSchema = yup
  .object({
    email: yup.string().email().required("Pole wymagane"),
  })
  .required();

export const NewsletterForm = () => {
  const { register, handleSubmit } = useForm<CheckoutFormData>({
    resolver: yupResolver(checkoutFormSchema),
  });

  const { mutate } = useAddToNewsletterMutation();
  const onSubmit = handleSubmit((data) => mutate(data));

  return (
    <form onSubmit={onSubmit}>
      <div className="shadow overflow-hidden sm:rounded-md">
        <div className="px-4 py-5 bg-white sm:p-6">
          <div className="grid grid-cols-6 gap-6">
            <div className="col-span-6 sm:col-span-3">
              <FormInput
                name="email"
                label={"Email address"}
                register={register}
                autoComplete="email"
              />
            </div>
            <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
              <button
                type="submit"
                className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};
