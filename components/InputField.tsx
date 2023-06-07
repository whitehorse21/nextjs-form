interface InputFieldProps {
  id: string;
  label: string;
  placeholder: string;
  type?: string;
  value: string;
  onChange: {
    (e: React.ChangeEvent<any>): void;
    <T_1 = string | React.ChangeEvent<any>>(
      field: T_1
    ): T_1 extends React.ChangeEvent<any>
      ? void
      : (e: string | React.ChangeEvent<any>) => void;
  };
  onBlur: {
    (e: React.FocusEvent<any>): void;
    <T = any>(fieldOrEvent: T): T extends string ? (e: any) => void : void;
  };
  errorMessage?: string;
  touched: boolean | undefined;
}

export default function InputField({
  id,
  label,
  placeholder,
  type = "text",
  value,
  onChange,
  onBlur,
  errorMessage,
  touched,
}: InputFieldProps) {
  const error = errorMessage && touched;

  return (
    <div className="pb-4">
      <label
        htmlFor={id}
        className={`block font-latoBold text-sm pb-2 ${
          error ? "text-red-400" : ""
        }`}
      >
        {error ? errorMessage : label}
      </label>
      <input
        className={`border-2 border-gray-500 p-2 rounded-md w-1/2 outline-none tablet:w-full ${
          error
            ? "border-red-400 focus:border-red-400 focus:ring-red-400"
            : "focus:border-teal-500 focus:ring-teal-500"
        }`}
        id={id}
        name={id}
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        onBlur={onBlur}
      />
    </div>
  );
}
