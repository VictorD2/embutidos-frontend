/* eslint-disable arrow-parens */
import React from 'react';
import { ViewListIcon } from '@heroicons/react/outline';
import Link from 'next/link';
import AppButton from '@shared/app_button';

const routes = [
  {
    name: 'Inicio',
    link: '/',
  },
  {
    name: 'Catálogo',
    link: '/catalogo',
  },
  {
    name: 'Nosotros',
    link: '/nosotros',
  },
];

const AppHeader = () => {
  return (
    <header className="w-full flex h-20 bg-secondary">
      <div className="lg:hidden flex h-full items-center w-full pl-5">
        <AppButton>
          <ViewListIcon className="w-6" />
        </AppButton>
      </div>
      <nav className="lg:flex hidden w-full px-20">
        <div className="w-2/12 h-20 bg-blue-500" />
        <ul className="w-10/12 h-20 bg-green-500">
          {routes.map(item => {
            return (
              <li key={item.name}>
                <Link href={item.link}>{item.name}</Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};

export default AppHeader;
