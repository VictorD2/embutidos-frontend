import { useState } from 'react';

// Icons
import { EyeIcon, EyeOffIcon } from '@heroicons/react/outline';

// Types
type AppInputTextProps = {
  name: string;
  value: string;
  label?: string;
  placeholder?: string;
  type?: string;
  autoComplete?: string;
  onChange: Function;
  onFocus?: Function;
  helpText?: string;
  helpBorder?: string;
  helpColor?: string;
  borderColor?: string;
  bgColor?: string;
  bgPlaceholder?: string;
  labelColor?: string;
  className?: string;
  height?: string;
  direction?: string;
  width?: string;
  disabled?: boolean;
  classNameCaption?: string;
  labelWidth?: string;
  passwordEye?: boolean;
  passwordEyeColor?: string;
  helpTextHeight?: string;
  required?: boolean;
};
export const AppInputText = ({
  passwordEye = false,
  required = false,
  labelWidth = '',
  classNameCaption = '',
  disabled = false,
  width = '',
  direction = 'flex flex-col items-start',
  name,
  value,
  label,
  placeholder,
  type = 'text',
  autoComplete = 'off',
  onChange,
  onFocus,
  helpText,
  helpColor = 'text-red-500',
  helpBorder = 'border-red-500',
  borderColor = '',
  bgColor = 'bg-background',
  bgPlaceholder = 'placeholder-gray-400',
  labelColor = 'text-gray-700',
  className = '',
  height = 'h-10',
  helpTextHeight = 'h-2',
  passwordEyeColor = 'text-black',
}: AppInputTextProps) => {
  const classNames = (...classes: any): string => {
    return classes.filter(Boolean).join(' ');
  };

  const [eye, setEye] = useState<boolean>(false);
  const [tipo, setTipo] = useState<string>(type);

  return (
    <div className={`${direction} ${width}`}>
      {label && (
        <div className={`my-2 ${labelWidth}`}>
          <label
            htmlFor={name}
            className={'block text-sm whitespace-nowrap relative font-medium  ' + labelColor + '  mt-1'}
          >
            {label}
            {required && <span className="text-red-500 ml-2">*</span>}
          </label>
        </div>
      )}
      <div className="w-full">
        <div className="relative w-full">
          <input
            disabled={disabled}
            id={name}
            name={name}
            value={value}
            placeholder={placeholder}
            autoComplete={autoComplete}
            type={tipo ?? 'text'}
            onChange={e => onChange(e)}
            onFocus={e => {
              if (onFocus) onFocus(e);
            }}
            className={classNames(
              bgColor,
              height,
              bgPlaceholder,
              helpText ? helpBorder : borderColor,
              'appearance-none block w-full px-3 h-10 items-center rounded-md focus:outline-none sm:text-sm',
              className
            )}
          />
          {passwordEye && (
            <>
              {!eye ? (
                <EyeIcon
                  onClick={() => {
                    setEye(true);
                    setTipo('text');
                  }}
                  className={classNames('w-5 h-5 absolute top-[10px] right-[15px]', passwordEyeColor)}
                  // style={{ top: '10px', right: '15px' }}
                />
              ) : (
                <EyeOffIcon
                  onClick={() => {
                    setEye(false);
                    setTipo('password');
                  }}
                  className={classNames('w-5 h-5 absolute top-[10px] right-[15px]', passwordEyeColor)}
                  // style={{ top: '10px', right: '15px' }}
                />
              )}
            </>
          )}
        </div>
        {helpText !== undefined && (
          <div className={classNames(helpColor, 'caption mt-1', helpTextHeight, classNameCaption)}>{helpText}</div>
        )}
      </div>
    </div>
  );
};
