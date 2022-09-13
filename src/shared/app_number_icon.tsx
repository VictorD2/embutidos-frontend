/* eslint-disable arrow-parens */
import React from 'react';

type AppNumberIconProps = {
  number: string;
  className?: string;
  font?: string;
};
const AppNumberIcon = ({ number, className, font }: AppNumberIconProps) => {
  const numeros = number.split('');
  return (
    <div className="flex flex-row w-full h-full">
      {numeros.map(item => {
        return <i key={item} className={`fa-solid fa-${item} ${font} ${className}`} />;
      })}
    </div>
  );
};

AppNumberIcon.defaultProps = {
  className: 'string',
  font: ' text-xs',
};

export default AppNumberIcon;
