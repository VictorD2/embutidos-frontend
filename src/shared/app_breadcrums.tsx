import React from 'react';
import { useRouter } from 'next/router';

// Icon
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

export const AppBreadCrumb = ({
  colorText = 'text-gray-500',
  fontSize = 'text-sm',
  colorFirst = 'text-secondary',
  routes,
}: AppBreadCrumbProps) => {
  const router = useRouter();

  const classNames = (...classes: any): string => {
    return classes.filter(Boolean).join(' ');
  };

  return (
    <div className="app-row items-center w-full ltr:pl-7 rtl:pr-7 pt-6 block">
      {routes.map((item, i) => {
        if (i === routes.length - 1)
          return (
            <div key={i} className={classNames(colorFirst, fontSize, 'capitalize')}>
              {item.name}
            </div>
          );
        return (
          // eslint-disable-next-line
          <div
            key={i}
            onClick={() => router.push(`${item.link}`)}
            className={classNames(
              colorText,
              'capitalize',
              'hover:text-secondary',
              fontSize,
              'flex items-center justify-start',
              'cursor-pointer'
            )}
          >
            {item.name}
            <ChevronRightIcon className={classNames('h-4 w-4 mx-2 text-gray-500', fontSize)} />
          </div>
        );
      })}
    </div>
  );
};
