/* eslint-disable comma-dangle */
/* eslint-disable arrow-parens */
/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable @typescript-eslint/ban-types */
import React, { Dispatch, useEffect, useState } from 'react';
// Icons
import {
  ChevronDoubleLeftIcon,
  ChevronDoubleRightIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from '@heroicons/react/outline';
import AppSelect from '@shared/app_select.';
import { Opts } from '@interfaces/Product/producto.interface';

// Types
type AppPaginateProps = {
  count: number;
  setOpts: Dispatch<Opts>;
  opts: Opts;
  className?: string;
};

// eslint-disable-next-line object-curly-newline
const AppPaginate = ({ count, className, setOpts, opts }: AppPaginateProps) => {
  const [paginas, setPaginas] = useState<number[]>([]);
  const pages = Math.ceil(count / opts.limit);

  const classNames = (...classes: string[]): string => {
    return classes.filter(Boolean).join(' ');
  };

  const setPaginasConfig = () => {
    const paginasLista: number[] = [];
    for (let index = 0; index < pages; index += 1) paginasLista.push(index + 1);
    if (opts.page + 4 >= pages) return setPaginas(paginasLista.slice(pages - 5, pages));
    if (opts.page >= 5) return setPaginas(paginasLista.splice(opts.page - 1, 5));
    return setPaginas(paginasLista.splice(0, 5));
  };

  const handleChangeLimit = (valor: string) => {
    setOpts({ ...opts, limit: parseInt(valor, 10), page: 1 });
  };

  useEffect(() => {
    setPaginasConfig();
    return () => setPaginas([]);
  }, [opts, pages]);

  return (
    <>
      {count > 0 && (
        <div
          className={classNames(
            `${className}`,
            'flex lg:flex-row md:flex-row flex-col lg:gap-0 md:gap-0 gap-5 justify-between items-center py-2 caption'
          )}
        >
          <div className="text-sm flex flex-row items-center justify-center gap-2">
            <span>Página</span>
            {opts.page}
            <span>de</span>
            {pages}
            <span>, Mostrando </span>
            <AppSelect
              width="w-20"
              selected={`${opts.limit}`}
              items={['25', '50', '100', '150', '200']}
              name="page"
              onChange={handleChangeLimit}
            />
            <span>de </span>
            {count}
            <span>registros </span>
          </div>
          <div className="flex flex-row items-center">
            <ChevronDoubleLeftIcon
              className="h-5 w-5 text-gray-500 cursor-pointer"
              onClick={() => {
                if (opts.page > 1) setOpts({ ...opts, page: 1 });
              }}
            />
            <ChevronLeftIcon
              className="h-5 w-5 text-gray-500 cursor-pointer"
              onClick={() => {
                if (opts.page > 1) setOpts({ ...opts, page: opts.page - 1 });
              }}
            />

            {paginas.map(item => {
              return (
                // eslint-disable-next-line
                <div
                  key={item}
                  onClick={() => {
                    if (opts.page === item) return;
                    setOpts({ ...opts, page: item });
                  }}
                  className={`mx-1 px-1 text-sm w-8 flex items-center justify-center h-8 rounded-md cursor-pointer transition-all hover:bg-gray-600 hover:text-white ${
                    opts.page === item ? 'bg-secondary text-white' : 'text-gray-900 border border-gray-400'
                  } `}
                >
                  {item}
                </div>
              );
            })}

            <ChevronRightIcon
              className="h-5 w-5 text-gray-500 cursor-pointer"
              onClick={() => {
                if (opts.page < pages) setOpts({ ...opts, page: opts.page + 1 });
              }}
            />
            <ChevronDoubleRightIcon
              className="h-5 w-5 text-gray-500 cursor-pointer"
              onClick={() => {
                if (opts.page < pages) setOpts({ ...opts, page: pages });
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
