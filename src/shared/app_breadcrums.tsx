/* eslint-disable object-curly-newline */
/* eslint-disable comma-dangle */
import React from 'react';
import { useRouter } from 'next/router';
import { ChevronRightIcon } from '@heroicons/react/outline';

// Types
type enlace = {
  link: string;
  name: string;
};

type AppBreadCrumbProps = {
  colorText?: string;
  colorFirst?: string;
  fontSize?: string;
  routes: enlace[];
};

const AppBreadCrumb = ({ colorText, fontSize, colorFirst, routes }: AppBreadCrumbProps) => {
  const router = useRouter();

  const classNames = (...classes: string[]): string => {
    return classes.filter(Boolean).join(' ');
  };

  return (
    <div className="app-row items-center w-full pr-7 pt-6 block">
      {routes.map((item, i) => {
        if (i === routes.length - 1) {
          return (
            <div key={item.name} className={classNames(`${colorFirst}`, `${fontSize}`, 'capitalize')}>
              {item.name}
            </div>
          );
        }
        return (
          // eslint-disable-next-line
          <div
            key={item.name}
            onClick={() => router.push(`${item.link}`)}
            className={classNames(
              `${colorText}`,
              'capitalize',
              'hover:text-primary',
              `${fontSize}`,
              'transition-all duration-500',
              'flex items-center justify-start',
              // eslint-disable-next-line prettier/prettier
              'cursor-pointer'
            )}
          >
            {item.name}
            <ChevronRightIcon className={classNames('h-4 w-4 mx-2 text-gray-500', `${fontSize}`)} />
          </div>
        );
      })}
    </div>
  );
};

AppBreadCrumb.defaultProps = {
  colorText: 'text-gray-500',
  fontSize: 'text-sm',
  colorFirst: 'text-secondary',
};

export default AppBreadCrumb;
