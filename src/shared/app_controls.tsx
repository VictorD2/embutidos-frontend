import React, { ReactNode } from 'react';

// Types
type AppControlsProps = {
  children: ReactNode;
  className?: string;
};

const AppControls = ({
  children,
  className = 'justify-between flex lg:flex-row md:flex-row gap-6 p-6',
}: AppControlsProps) => {
  const classNames = (...classes: string[]): string => {
    return classes.filter(Boolean).join(' ');
  };
  return (
    <div className="bg-white rounded-lg shadow-lg mt-4">
      <div className={classNames(className)}>{children}</div>
    </div>
  );
};
AppControls.defaultProps = {
  className: 'justify-between flex lg:flex-row md:flex-row gap-6 p-6',
};

export default AppControls;
