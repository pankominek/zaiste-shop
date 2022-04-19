import { useForm } from "react-hook-form";
import { validateCreditCardDate } from "../utils";
import { FormCheckbox } from "./FormCheckbox";
import { FormInput } from "./FormInput";

interface CheckoutFormData {
  emailAddress: string;
  nameOnCard: string;
  cardNumber: string;
  expirationDate: string;
  cvc: string;
  company: string;
  address: string;
  apartment: string;
  city: string;
  region: string;
  postalCode: string;
  sameAsShipping: boolean;
}

export const CheckoutForm = () => {
  const { register, setValue, handleSubmit, formState } = useForm<CheckoutFormData>();
  const onSubmit = handleSubmit(data => console.log(data));

  return (
    <div className="mt-10 sm:mt-0">
      <div className="md:grid md:grid-cols-3 md:gap-6">
        <div className="md:col-span-1">
          <div className="px-4 sm:px-0">
            <h3 className="text-lg font-medium leading-6 text-gray-900">Personal Information</h3>
            <p className="mt-1 text-sm text-gray-600">Use a permanent address where you can receive mail.</p>
          </div>
        </div>
        <div className="mt-5 md:mt-0 md:col-span-2">
          <form
            onSubmit={onSubmit}>
            <div className="shadow overflow-hidden sm:rounded-md">
              <div className="px-4 py-5 bg-white sm:p-6">
                <div className="grid grid-cols-6 gap-6">
                  <div className="col-span-6 sm:col-span-3">
                    <FormInput
                      name="nameOnCard"
                      label={"Name on card"}
                      register={register}
                      error={formState.errors}
                      autoComplete="cc-name"
                      validate="" />
                  </div>
                  <div className="col-span-6 sm:col-span-3">
                    <FormInput
                      name="cardNumber"
                      label={"Card number"}
                      register={register}
                      error={formState.errors}
                      autoComplete="cc-number"
                      validate="" />
                  </div>
                  <div className="col-span-6 sm:col-span-3">
                    <FormInput
                      name="expirationDate"
                      label={"exp. Date"}
                      register={register}
                      error={formState.errors}
                      autoComplete="cc-exp"
                      validate={validateCreditCardDate} />
                  </div>

                  <div className="col-span-6 sm:col-span-3">
                    <FormInput
                      name="expirationDate"
                      label={"CVV"}
                      register={register}
                      error={formState.errors}
                      autoComplete="cc-csc"
                      validate="" />
                  </div>
                  <div className="col-span-6 sm:col-span-3">
                    <FormInput
                      name="company"
                      label={"Company"}
                      register={register}
                      error={formState.errors}
                      autoComplete="organization"
                      validate="" />
                  </div>
                  <div className="col-span-6 sm:col-span-4">
                    <FormInput
                      name="emailAddress"
                      label={"Email address"}
                      register={register}
                      error={formState.errors}
                      autoComplete="email"
                      validate=""
                    />
                  </div>
                  <div className="col-span-6">
                    <FormInput
                      name="address"
                      label={"Address"}
                      register={register}
                      error={formState.errors}
                      autoComplete="street-address"
                      validate=""
                    />
                  </div>
                  <div className="col-span-6">
                    <FormInput
                      name="apartment"
                      label={"Apartment"}
                      register={register}
                      error={formState.errors}
                      autoComplete="address-level3"
                      validate=""
                    />
                  </div>
                  <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                    <FormInput
                      name="city"
                      label={"City"}
                      register={register}
                      error={formState.errors}
                      autoComplete="address-level2"
                      validate="" />
                  </div>
                  <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                    <FormInput
                      name="region"
                      label={"State / Province"}
                      register={register}
                      error={formState.errors}
                      autoComplete="address-level1"
                      validate="" />
                  </div>
                  <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                    <FormInput
                      name="postalCode"
                      label={"Postal code"}
                      register={register}
                      error={formState.errors}
                      autoComplete="postal-code"
                      validate="" />
                  </div>
                  <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                    <FormCheckbox
                      name="sameAsShipping"
                      label={"Same as shipping information"}
                      register={register}
                    />
                  </div>
                </div>
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
          </form>
        </div>
      </div>
    </div>
  )
}