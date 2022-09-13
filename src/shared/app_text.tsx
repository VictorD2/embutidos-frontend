/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable comma-dangle */
/* eslint-disable object-curly-newline */
/* eslint-disable arrow-parens */
/* eslint-disable react/react-in-jsx-scope */
import React, { ReactNode } from 'react';

// Types
type AppTextProps = {
  as: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';
  textColor?: string;
  bgColor?: string;
  fontSize?: string;
  children: ReactNode;
  onClick?: React.MouseEventHandler;
  className?: string;
  hover?: string;
  focus?: string;
};

// eslint-disable-next-line max-len
const AppText = ({ textColor, bgColor, fontSize, className, hover, focus, children, onClick, as }: AppTextProps) => {
  const classNames = (...classes: string[]): string => {
    return classes.filter(Boolean).join(' ');
  };

  const getHover = (text: string) => {
    return `hover:${text}`.replaceAll(' ', ' hover:');
  };

  const getFocus = (text: string) => {
    return `focus:${text}`.replaceAll(' ', ' focus:');
  };

  const getClassName = (): string => {
    return classNames(
      getHover(`${hover}`),
      getFocus(`${focus}`),
      `${fontSize}`,
      `${className}`,
      `${bgColor}`,
      `${textColor}`
    );
  };

  const Text = () => {
    if (as === 'h1') {
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
    }
    if (as === 'h2') {
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
    }
    if (as === 'h3') {
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
    }
    if (as === 'h4') {
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
    }
    if (as === 'h5') {
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
    }
    if (as === 'h6') {
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
    }
    if (as === 'p') {
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
    }
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

AppText.defaultProps = {
  className: '',
  hover: '',
  focus: '',
  bgColor: '',
  fontSize: '',
  textColor: 'text-black',
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onClick: () => {},
};

export default AppText;
