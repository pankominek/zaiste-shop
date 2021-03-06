interface InputProps {
  label: string;
  register: any;
  name: string;
};

export const FormCheckbox = ({ register, label, name }: InputProps) => {
  return (
    <>
      <label
        htmlFor={name}
        className="block text-sm font-medium text-gray-700"
      >
        {label}
      </label>
      <input
        defaultChecked
        type="checkbox"
        id={name}
        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
        {...register(name)}
      />
    </>
  )
}
