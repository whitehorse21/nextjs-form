interface TermsOfServiceProps {
  onChange: {
    (e: React.ChangeEvent<any>): void;
    <T_1 = string | React.ChangeEvent<any>>(
      field: T_1
    ): T_1 extends React.ChangeEvent<any>
      ? void
      : (e: string | React.ChangeEvent<any>) => void;
  };
  errorMessage: string | string[] | never[] | undefined;
  touched: never[] | undefined;
}

export default function TermsOfService({
  onChange,
  errorMessage,
  touched,
}: TermsOfServiceProps) {
  const error = errorMessage && touched;

  return (
    <div className="pb-4">
      <label
        htmlFor="terms"
        className={`block font-latoBold text-sm pb-2 ${
          error ? "text-red-400" : ""
        }`}
      >
        {error ? errorMessage : "Terms of service"}
      </label>
      <div className="flex items-center gap-3">
        <input
          id="terms"
          name="terms"
          type="checkbox"
          value="checked"
          onChange={onChange}
          className={`h-5 w-5 border-2 cursor-pointer ${
            error
              ? "border-red-400 focus:ring-red-400"
              : "text-teal-500 focus:border-teal-500 focus:ring-teal-500"
          }`}
        />
        <p>
          I agree to the Terms and Service that my data will be taken and sold.
        </p>
      </div>
    </div>
  );
}
