import React from 'react';
import { AppButton } from './app_button';
import { ViewListIcon } from '@heroicons/react/outline';
import Link from 'next/link';

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
        <AppButton onClick={() => {}}>
          <ViewListIcon className="w-6" />
        </AppButton>
      </div>
      <nav className="lg:flex hidden w-full px-20">
        <div className="w-2/12 h-20 bg-blue-500"></div>
        <ul className="w-10/12 h-20 bg-green-500">
          {routes.map((item, i) => {
            return (
              <li key={i + 'nav'}>
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
