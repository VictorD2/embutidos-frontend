/* eslint-disable arrow-parens */
/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable @typescript-eslint/ban-types */
import React, { useEffect, useState } from 'react';
// Icons
import {
  ChevronDoubleLeftIcon,
  ChevronDoubleRightIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from '@heroicons/react/outline';
import AppNumberIcon from '@shared/app_number_icon';

// Types
type AppPaginateProps = {
  count: number;
  page: number;
  limit: number;
  changePage: Function;
  className?: string;
};

// eslint-disable-next-line object-curly-newline
export const AppPaginate = ({ count, page, limit, changePage, className }: AppPaginateProps) => {
  const [paginas, setPaginas] = useState<number[]>([]);
  const pages = Math.ceil(count / limit);

  const classNames = (...classes: string[]): string => {
    return classes.filter(Boolean).join(' ');
  };

  const setPaginasConfig = () => {
    const paginasLista: number[] = [];
    for (let index = 0; index < pages; index += 1) paginasLista.push(index + 1);
    setPaginas(paginasLista);
  };

  useEffect(() => {
    setPaginasConfig();
    return () => setPaginas([]);
  }, [page, count, limit]);

  return (
    <>
      {count > 0 && (
        <div className={classNames(`${className}`, 'flex flex-row justify-between items-center py-2 caption')}>
          <div className="text-sm flex flex-row items-center justify-center gap-2">
            <span>Page</span>
            <AppNumberIcon number={`${page}`} />
            <span>of</span>
            <AppNumberIcon number={`${pages}`} />
          </div>
          <div className="flex flex-row items-center">
            <ChevronDoubleLeftIcon
              className="h-4 w-4 text-gray-500 cursor-pointer"
              onClick={() => {
                if (page > 1) changePage(1);
              }}
            />
            <ChevronLeftIcon
              className="h-4 w-4 text-gray-500 cursor-pointer"
              onClick={() => {
                if (page > 1) changePage(page - 1);
              }}
            />

            {paginas.map(item => {
              if (item > 5) return <></>;
              return (
                // eslint-disable-next-line
                <div
                  key={item}
                  onClick={() => {
                    if (page === item) return;
                    changePage(item);
                  }}
                  className={`mx-1 px-1 rounded-md cursor-pointer transition-all hover:bg-gray-600 hover:text-white ${
                    page === item ? 'bg-secondary text-white' : 'text-gray-900 border border-gray-400'
                  } `}
                >
                  <AppNumberIcon font="text-tiny" className="text-tiny w-1 p-1 ltr:pr-2 rtl:pl-2" number={`${item}`} />
                </div>
              );
            })}

            <ChevronRightIcon
              className="h-4 w-4 text-gray-500 cursor-pointer"
              onClick={() => {
                if (page < pages) changePage(page + 1);
              }}
            />
            <ChevronDoubleRightIcon
              className="h-4 w-4 text-gray-500 cursor-pointer"
              onClick={() => {
                if (page < pages) changePage(pages);
              }}
            />
          </div>
        </div>
      )}
    </>
  );
};

AppPaginate.defaultProps = {
  className: '',
};

export default AppPaginate;
