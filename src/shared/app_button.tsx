/* eslint-disable comma-dangle */
import React, { ReactNode } from 'react';
import Ripples from 'react-ripples';

// Types
type AppButtonProps = {
  variant?: 'contained' | 'outlined' | 'text';
  textColor?: string;
  bgColor?: string;
  children: ReactNode;
  border?: string;
  height?: string;
  disabled?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  type?: 'button' | 'submit' | 'reset' | undefined;
  className?: string;
  loading?: boolean;
  padding?: string;
};

const AppButton = ({
  className,
  variant,
  children,
  onClick,
  disabled,
  textColor,
  bgColor,
  border,
  height,
  padding,
  type,
  loading,
}: AppButtonProps) => {
  const classNames = (...classes: string[]): string => {
    return classes.filter(Boolean).join(' ');
  };

  return (
    <Ripples className={classNames(`${className}`, `${height}`)}>
      <button
        // eslint-disable-next-line arrow-parens
        onClick={e => {
          if (onClick) onClick(e);
        }}
        disabled={disabled}
        // eslint-disable-next-line react/button-has-type
        type={type}
        className={classNames(
          disabled ? 'bg-opacity-75' : '',
          variant === 'outlined' ? `${border}` : '',
          variant === 'contained' ? 'text-white' : `${textColor}`,
          variant === 'contained' ? `${bgColor}` : '',
          variant === 'contained' ? 'hover:opacity-90' : `hover:${bgColor} hover:bg-opacity-25 hover:${textColor}`,
          `${padding}`,
          'rounded-md w-full h-full flex justify-center items-center button capitalize'
        )}
      >
        {loading ? (
          // eslint-disable-next-line react/jsx-no-useless-fragment
          <>{children}</>
        ) : (
          <div
            className={classNames(
              disabled ? 'bg-opacity-75' : '',
              'relative rounded-full  animate-spin h-4 w-4 border-2 border-b-transparent border-t-white border-l-white border-r-white'
            )}
          />
        )}
      </button>
    </Ripples>
  );
};

AppButton.defaultProps = {
  className: '',
  variant: 'contained',
  disabled: false,
  textColor: 'text-primary',
  bgColor: 'bg-primary',
  border: 'border border-primary',
  height: 'h-10',
  padding: 'px-4 py-2',
  type: 'button',
  loading: true,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onClick: () => {},
};

export default AppButton;
