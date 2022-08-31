import { ReactNode } from 'react';
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
  onClick: Function;
  type?: 'button' | 'submit' | 'reset' | undefined;
  className?: string;
  loading?: boolean;
  padding?: string;
};

export const AppButton = ({
  className = '',
  variant = 'contained',
  children,
  onClick,
  disabled = false,
  textColor = 'text-primary',
  bgColor = 'bg-primary',
  border = 'border border-primary',
  height = 'h-10',
  padding = 'px-4 py-2',
  type = 'button',
  loading = true,
}: AppButtonProps) => {
  const classNames = (...classes: any): string => {
    return classes.filter(Boolean).join(' ');
  };

  return (
    <Ripples className={className}>
      <button
        onClick={e => onClick(e)}
        disabled={disabled}
        type={type}
        className={classNames(
          disabled ? 'bg-opacity-75' : '',
          variant == 'outlined' ? border : '',
          variant == 'contained' ? 'text-white' : textColor,
          variant == 'contained' ? bgColor : '',
          variant == 'contained' ? 'hover:opacity-90' : 'hover:' + bgColor + ' hover:bg-opacity-25 hover:' + textColor,
          height,
          padding,
          'rounded-md w-full flex justify-center items-center button capitalize'
        )}
      >
        {loading ? (
          <>{children}</>
        ) : (
          <div
            className={classNames(
              disabled ? 'bg-opacity-75' : '',
              'relative rounded-full  animate-spin h-4 w-4 border-2 border-b-transparent border-t-white border-l-white border-r-white'
            )}
          ></div>
        )}
      </button>
    </Ripples>
  );
};
