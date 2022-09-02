/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable arrow-parens */
/* eslint-disable object-curly-newline */
import React from 'react';

type AppInputColorProps = {
  name: string;
  value: string;
  label?: string;
  placeholder?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  onFocus?: React.FocusEventHandler<HTMLInputElement>;
  error?: string;
};

const AppInputColor = ({ name, value, label, placeholder, onChange, onFocus, error }: AppInputColorProps) => {
  const classNames = (...classes: string[]): string => {
    return classes.filter(Boolean).join(' ');
  };

  return (
    <div className="flex flex-col items-start">
      {/* Label */}
      {label && (
        <div className="my-2">
          <label htmlFor={name} className="block text-xs font-medium text-gray-700 mt-1">
            {label}
          </label>
        </div>
      )}
      <div className="flex flex-row justify-start items-center w-full rounded-lg">
        {/* Input */}
        <input
          id={name}
          name={name}
          value={value}
          placeholder={placeholder}
          type="color"
          autoComplete="new-password"
          required
          onChange={onChange}
          onFocus={e => {
            if (onFocus) onFocus(e);
          }}
          className={classNames(
            'bg-background appearance-none block w-full placeholder-gray-400 focus:outline-none',
            'border-2 focus:border-secondary sm:text-sm',
            // eslint-disable-next-line comma-dangle
            error ? 'border-red-500' : 'border-transparent'
          )}
        />
      </div>
      {/* Error message */}
      {error && <div className="p text-xs text-red-500 mt-1">{error}</div>}
    </div>
  );
};

AppInputColor.defaultProps = {
  label: '',
  placeholder: '',
  onChange: () => {},
  onFocus: Function,
  error: '',
};

export default AppInputColor;
