interface InputProps {
  label: string;
  register: any;
  name: string;
  type: string;
}

export const FormInput = ({ register, label, name, type }: InputProps) => {
  return (
    <>
      <label htmlFor={name} className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <input
        type={type}
        id={name}
        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
        {...register(name)}
      />
      {/* <span className="text-xs text-red-700" role="alert">
        {error[name]?.message}
      </span> */}
    </>
  );
};
