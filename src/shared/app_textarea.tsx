import React from 'react';

// Types
type AppInputTextAreaProps = {
  name: string;
  value: string;
  label?: string;
  placeholder?: string;
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
  focus?: string;
  hover?: string;
};
export const AppTextArea = ({
  labelWidth = '',
  classNameCaption = '',
  disabled = false,
  width = '',
  direction = 'flex flex-col items-start',
  name,
  value,
  label,
  placeholder,
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
  height = 'h-40',
  focus = '',
  hover = '',
}: AppInputTextAreaProps) => {
  const classNames = (...classes: any): string => {
    return classes.filter(Boolean).join(' ');
  };
  const getHover = (text: string) => {
    return `hover:${text}`.replaceAll(' ', ' hover:');
  };

  const getFocus = (text: string) => {
    return `focus:${text}`.replaceAll(' ', ' focus:');
  };
  return (
    <div className={`${direction} ${width}`}>
      {label && (
        <div className={`my-2 ${labelWidth}`}>
          <label htmlFor={name} className={'block text-xs whitespace-nowrap font-medium ' + labelColor + '  mt-1'}>
            {label}
          </label>
        </div>
      )}
      <div className="w-full">
        <div className="relative w-full">
          <textarea
            disabled={disabled}
            id={name}
            name={name}
            value={value}
            placeholder={placeholder}
            autoComplete={autoComplete}
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
              'appearance-none block w-full p-3 h-10 items-center rounded-md focus:outline-none border-2 sm:text-sm scrollbar-thin scrollbar-thumb-secondary scrollbar-track-transparent',
              className,
              getHover(hover),
              getFocus(focus)
            )}
          />
        </div>
        {helpText && <div className={classNames(helpColor, 'caption mt-1', classNameCaption)}>{helpText}</div>}
      </div>
    </div>
  );
};
