interface InputProps {
  label: string;
  register: any;
  error: any;
  name: string;
  autoComplete: string;
};

export const FormInput = ({ register, label, error, name, autoComplete, }: InputProps) => {
  return (
    <>
      <label
        htmlFor={name}
        className="block text-sm font-medium text-gray-700"
      >
        {label}
      </label>
      <input
        type="text"
        id={name}
        autoComplete={autoComplete ? autoComplete : 'off'}
        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
        {...register(name)}
      />
      <span className="text-xs text-red-700" role="alert">
        {error[name]?.message}
      </span>
    </>
  )
}
