/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable max-len */
/* eslint-disable object-curly-newline */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import Select from 'react-select';

type AppComboBoxProps = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onChange: (value: any) => void;
  onFocus: (value: any) => void;
  label?: string;
  labelWidth?: string;
  labelColor?: string;
  name: string;
  width?: string;
  value: any;
  items: any[];
  placeholder?: string;
  required?: boolean;
  direction?: string;
  labelField: string;
  valueField: string;
  helpTextHeight?: string;
  classNameCaption?: string;
  helpColor?: string;
  helpText?: string;
};

const AppComboBox = ({
  onChange,
  helpTextHeight,
  classNameCaption,
  helpColor,
  helpText,
  labelField,
  valueField,
  label,
  width,
  onFocus,
  name,
  labelWidth,
  labelColor,
  value,
  items,
  required,
  placeholder,
  direction,
}: AppComboBoxProps) => {
  const classNames = (...classes: string[]): string => {
    return classes.filter(Boolean).join(' ');
  };

  const getValues = () => {
    const values = [];
    for (let i = 0; i < items.length; i += 1) {
      const element = items[i];
      values.push({ label: element[labelField], value: element[valueField] });
    }
    return values;
  };

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
      <Select
        name={name}
        minMenuHeight={180}
        maxMenuHeight={180}
        className={`w-full ${helpText ? 'border-red-500 border-2' : ''}`}
        onChange={onChange}
        placeholder={placeholder}
        // eslint-disable-next-line jsx-a11y/tabindex-no-positive
        tabIndex={200}
        onFocus={onFocus}
        value={value}
        // @ts-ignore
        options={getValues()}
      />
      {helpText !== '' && (
        <div className={classNames(`${helpColor}`, 'caption mt-1', `${helpTextHeight}`, `${classNameCaption}`)}>
          {helpText}
        </div>
      )}
    </div>
  );
};

AppComboBox.defaultProps = {
  label: '',
  required: false,
  width: 'w-full',
  labelWidth: '',
  direction: 'flex flex-col items-start',
  labelColor: 'text-gray-700',
  placeholder: 'Select an item',
  helpTextHeight: 'h-2',
  classNameCaption: '',
  helpColor: 'text-red-500',
  helpText: '',
};

export default AppComboBox;
