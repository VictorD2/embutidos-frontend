/* eslint-disable comma-dangle */
import React, { useState } from 'react';
import { EyeIcon, EyeOffIcon } from '@heroicons/react/outline';

// Types
type AppInputTextProps = {
  name: string;
  value: string;
  label?: string;
  placeholder?: string;
  type?: string;
  autoComplete?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  onFocus?: React.FocusEventHandler<HTMLInputElement>;
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
  helpTextHeight?: string;
  labelWidth?: string;
  passwordEye?: boolean;
  passwordEyeColor?: string;
  required?: boolean;
  padding?: string;
};
const AppInputText = ({
  passwordEye,
  required,
  labelWidth,
  classNameCaption,
  disabled,
  width,
  direction,
  name,
  value,
  label,
  placeholder,
  type,
  autoComplete,
  onChange,
  padding,
  onFocus,
  helpText,
  helpColor,
  helpBorder,
  borderColor,
  bgColor,
  bgPlaceholder,
  labelColor,
  className,
  height,
  helpTextHeight,
  passwordEyeColor,
}: AppInputTextProps) => {
  const classNames = (...classes: string[]): string => {
    return classes.filter(Boolean).join(' ');
  };

  const [eye, setEye] = useState<boolean>(false);
  const [tipo, setTipo] = useState<string>(`${type}`);

  return (
    <div className={`${direction} ${width}`}>
      {label && (
        <div className={`my-2 ${labelWidth}`}>
          <label htmlFor={name} className={`block text-sm whitespace-nowrap relative font-medium ${labelColor} mt-1`}>
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
            onChange={onChange}
            // eslint-disable-next-line arrow-parens
            onFocus={e => {
              if (onFocus) onFocus(e);
            }}
            className={classNames(
              `${bgColor}`,
              `${height}`,
              `${bgPlaceholder}`,
              helpText ? `${helpBorder}` : `${borderColor}`,
              `${padding}`,
              disabled ? 'text-gray-400' : '',
              'appearance-none block w-full items-center rounded-md focus:outline-none sm:text-sm',
              `${className}`
            )}
          />
          {passwordEye && (
            <div>
              {!eye ? (
                <EyeIcon
                  onClick={() => {
                    setEye(true);
                    setTipo('text');
                  }}
                  className={classNames('w-5 h-5 absolute top-[10px] right-[15px]', `${passwordEyeColor}`)}
                  // style={{ top: '10px', right: '15px' }}
                />
              ) : (
                <EyeOffIcon
                  onClick={() => {
                    setEye(false);
                    setTipo('password');
                  }}
                  className={classNames('w-5 h-5 absolute top-[10px] right-[15px]', `${passwordEyeColor}`)}
                  // style={{ top: '10px', right: '15px' }}
                />
              )}
            </div>
          )}
        </div>
        {helpText !== '' && (
          <div className={classNames(`${helpColor}`, 'caption mt-1', `${helpTextHeight}`, `${classNameCaption}`)}>
            {helpText}
          </div>
        )}
      </div>
    </div>
  );
};

AppInputText.defaultProps = {
  passwordEye: false,
  required: false,
  labelWidth: '',
  classNameCaption: '',
  disabled: false,
  width: '',
  direction: 'flex flex-col items-start',
  label: '',
  placeholder: '',
  type: 'text',
  autoComplete: 'off',
  padding: 'px-3',
  helpText: '',
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onFocus: () => {},
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onChange: () => {},
  helpColor: 'text-red-500',
  helpBorder: 'border-red-500 border-2',
  borderColor: '',
  bgColor: 'bg-background',
  bgPlaceholder: 'placeholder-gray-400',
  labelColor: 'text-gray-700',
  className: '',
  height: 'h-10',
  helpTextHeight: 'h-2',
  passwordEyeColor: 'text-black',
};

export default AppInputText;
