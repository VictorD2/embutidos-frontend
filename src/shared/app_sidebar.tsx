/* eslint-disable arrow-parens */
/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable react/require-default-props */
import React from 'react';
import { DuplicateIcon, ShoppingCartIcon } from '@heroicons/react/outline';
import AppMenuItem from '@shared/app_menu_item';

type AppSidebarProps = {
  setDrawer?: Function;
};
const navigation = [
  {
    slug: 'Pedidos',
    link: '/dashboard/pedidos',
    icon: ShoppingCartIcon,
  },
  {
    slug: 'Productos',
    link: '/dashboard/productos',
    icon: DuplicateIcon,
  },
  {
    slug: 'Clientes',
    link: '/dashboard/clientes',
    icon: DuplicateIcon,
  },
];
const AppSidebar = ({ setDrawer }: AppSidebarProps) => {
  return (
    <div className="h-screen lg:w-64 md:w-24 hover:md:w-64 ease-in duration-300 sidebar_text bg-secondary ">
      <div className="relative h-full w-full">
        <div className="absolute top-0 left-0 h-16 w-full">
          <div className="flex justify-center items-center h-full">
            <img
              className="lg:block md:hidden h-16 w-full logo-lg"
              src="https://static1.es.squarespace.com/static/5134cbefe4b0c6fb04df8065/t/5bd1e183ec212df24c8d5d0f/1582743997341/squarespace-logo-horizontal-white.jpg"
              alt="Empwr Logo"
            />
            <img
              className="lg:hidden md:block md:w-full w-0 h-16 logo-md"
              src="https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/zuc7wjtxhia6xklufnqb"
              alt="Empwr Logo"
            />
          </div>
        </div>
        <div className="app-col h-full pb-16 pt-20 scroll">
          <div className="overflow-hidden hover:lg:overflow-y-auto hover:lg:scrollbar-thumb-rounded-md hover:lg:scrollbar-thin hover:lg:scrollbar-thumb-primary hover:lg:scrollbar-track-secondary overflow-y-auto scrollbar-thumb-primary scrollbar-thin">
            {navigation.map(item => {
              return (
                // eslint-disable-next-line max-len
                <AppMenuItem setDrawer={setDrawer} key={item.slug} slug={item.slug} Icon={item.icon} link={item.link} />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppSidebar;
