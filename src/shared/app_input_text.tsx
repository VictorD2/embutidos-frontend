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
  focusColor?: string;
  labelColor?: string;
  className?: string;
  height?: string;
  direction?: string;
  width?: string;
  disabled?: boolean;
  classNameCaption?: string;
  labelWidth?: string;
  passwordEye?: boolean;
  focus?: string;
  hover?: string;
};
export const AppInputText = ({
  passwordEye = false,
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
  borderColor = 'border-transparent',
  bgColor = 'bg-background',
  bgPlaceholder = 'placeholder-gray-400',
  focusColor = 'border-primary',
  labelColor = 'text-gray-700',
  className = '',
  height = 'h-10',
  focus = '',
  hover = '',
}: AppInputTextProps) => {
  const classNames = (...classes: any): string => {
    return classes.filter(Boolean).join(' ');
  };
  const getHover = (text: string) => {
    return `hover:${text}`.replaceAll(' ', ' hover:');
  };

  const getFocus = (text: string) => {
    return `focus:${text}`.replaceAll(' ', ' focus:');
  };
  const [eye, setEye] = useState<boolean>(false);
  const [tipo, setTipo] = useState<string>(type);

  return (
    <div className={`${direction} ${width}`}>
      {label && (
        <div className={`my-2 ${labelWidth}`}>
          <label
            htmlFor={name}
            className={'block text-sm whitespace-nowrap font-medium capitalize ' + labelColor + '  mt-1'}
          >
            {label}
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
              'focus:' + focusColor,
              'appearance-none block w-full px-3 h-10 items-center rounded-md focus:outline-none border-2 sm:text-sm',
              className,
              getHover(hover),
              getFocus(focus)
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
                  className="w-5 absolute top-10px ltr:right-15px rtl:left-15px"
                  // style={{ top: '10px', right: '15px' }}
                />
              ) : (
                <EyeOffIcon
                  onClick={() => {
                    setEye(false);
                    setTipo('password');
                  }}
                  className="w-5 absolute top-10px ltr:right-15px rtl:left-15px"
                  // style={{ top: '10px', right: '15px' }}
                />
              )}
            </>
          )}
        </div>
        {helpText && <div className={classNames(helpColor, 'caption mt-1', classNameCaption)}>{helpText}</div>}
      </div>
    </div>
  );
};
