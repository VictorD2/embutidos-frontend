import React from 'react';
type AppNumberIconProps = {
  number: string;
  className?: string;
  font?: string;
};
export const AppNumberIcon = ({ number, className = '', font = ' text-xs' }: AppNumberIconProps) => {
  let numeros = number.split('');
  return (
    <div className="flex flex-row w-full h-full">
      {numeros.map((item, i) => {
        return <i key={i + 512} className={`fa-solid fa-${item} ${font} ${className}`}></i>;
      })}
    </div>
  );
};

