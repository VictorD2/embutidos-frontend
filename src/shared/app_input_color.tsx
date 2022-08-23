// Types
type AppInputColorProps = {
  name: string;
  value: string;
  label?: string;
  placeholder?: string;
  onChange: Function;
  onFocus?: Function;
  error?: string;
};

export const AppInputColor = ({
  name,
  value,
  label,
  placeholder,
  onChange,
  onFocus,
  error = '',
}: AppInputColorProps) => {
  const classNames = (...classes: any): string => {
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
          type={'color'}
          autoComplete={'new-password'}
          required
          onChange={e => onChange(e)}
          onFocus={e => {
            if (onFocus) onFocus(e);
          }}
          className={classNames(
            'bg-background appearance-none block w-full placeholder-gray-400 focus:outline-none',
            'border-2 focus:border-secondary sm:text-sm',
            error ? 'border-red-500' : 'border-transparent'
          )}
        />
        {/* <div className="rounded-full h-8 w-8 ring-2 ring-secondary" style={{ backgroundColor: value }} /> */}
      </div>
      {/* Error message */}
      {error && <div className="p text-xs text-red-500 mt-1">{error}</div>}
    </div>
  );
};
