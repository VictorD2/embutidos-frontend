import React from 'react';

// Icons
import { RefreshIcon } from '@heroicons/react/outline';

// Types
type AppLoadingProps = {
  overlayColor?: string;
  textColor?: string;
  text?: string;
  height?: string;
};

export const AppLoading = ({ overlayColor = 'bg-gray-900', text = 'Loading Data...', textColor = 'text-white', height = 'h-64' }: AppLoadingProps) => {
  const classNames = (...classes: any): string => {
    return classes.filter(Boolean).join(' ');
  };
  return (
    <div className={classNames(overlayColor, height, 'w-full opacity-70 top-0 left-0  absolute flex flex-col items-center justify-center gap-2')}>
      <RefreshIcon className={classNames(textColor, 'w-10 h-10 animate-spin')} />
      <span className={classNames(textColor)}>{text}</span>
    </div>
  );
};
