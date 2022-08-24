import { ReactNode } from 'react';

// Types
type AppTextProps = {
  as: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';
  textColor?: string;
  bgColor?: string;
  fontSize?: string;
  children: ReactNode;
  height?: string;
  onClick?: Function;
  className?: string;
  hover?: string;
  focus?: string;
};

export const AppText = ({
  className = '',
  children,
  onClick,
  as,
  fontSize,
  hover = '',
  focus = '',
  textColor = 'text-black',
  bgColor,
}: AppTextProps) => {
  const classNames = (...classes: any): string => {
    return classes.filter(Boolean).join(' ');
  };

  const getHover = (text: string) => {
    return `hover:${text}`.replaceAll(' ', ' hover:');
  };

  const getFocus = (text: string) => {
    return `focus:${text}`.replaceAll(' ', ' focus:');
  };

  const getClassName = (): string => {
    return classNames(getHover(hover), getFocus(focus), fontSize, className, bgColor, textColor);
  };

  const Text = () => {
    if (as === 'h1')
      return (
        <h1
          className={getClassName()}
          onClick={e => {
            if (onClick) onClick(e);
          }}
        >
          {children}
        </h1>
      );
    if (as === 'h2')
      return (
        <h2
          className={getClassName()}
          onClick={e => {
            if (onClick) onClick(e);
          }}
        >
          {children}
        </h2>
      );
    if (as === 'h3')
      return (
        <h3
          className={getClassName()}
          onClick={e => {
            if (onClick) onClick(e);
          }}
        >
          {children}
        </h3>
      );
    if (as === 'h4')
      return (
        <h4
          className={getClassName()}
          onClick={e => {
            if (onClick) onClick(e);
          }}
        >
          {children}
        </h4>
      );
    if (as === 'h5')
      return (
        <h5
          className={getClassName()}
          onClick={e => {
            if (onClick) onClick(e);
          }}
        >
          {children}
        </h5>
      );
    if (as === 'h6')
      return (
        <h6
          className={getClassName()}
          onClick={e => {
            if (onClick) onClick(e);
          }}
        >
          {children}
        </h6>
      );
    if (as === 'p')
      return (
        <p
          className={getClassName()}
          onClick={e => {
            if (onClick) onClick(e);
          }}
        >
          {children}
        </p>
      );
    return (
      <span
        className={getClassName()}
        onClick={e => {
          if (onClick) onClick(e);
        }}
      >
        {children}
      </span>
    );
  };

  return <Text />;
};
