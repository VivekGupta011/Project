import React from 'react';

type Props = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & {
  label?: string;
  error?: string;
};

const RadioButton = React.forwardRef<HTMLInputElement, Props>(
  (
    { className, error, label, ...rest }: Props,
    ref: React.ForwardedRef<HTMLInputElement>
  ) => {
    return (
      <div className="flex justify-start items-center gap-2 relative">
        <input
          ref={ref}
          type="radio"
          className={`text-base px-5 py-3.5 text-vink-purple font-medium relative w-5 h-5  ${
            error
              ? 'border-red-500'
              : 'border-vink-purple focus:ring-vink-purple'
          }`}
          value={label}
          {...rest}
        />
        <label
          htmlFor={label}
          className="text-base font-medium text-vink-blue-dark"
        >
          {label}
        </label>
      </div>
    );
  }
);

RadioButton.displayName = 'RadioButton';
export default RadioButton;
