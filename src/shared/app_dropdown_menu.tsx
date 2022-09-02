/* eslint-disable arrow-parens */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Menu, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/outline';
import React, { ElementType, Fragment } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

type AppDropdownTypes = {
  name: string;
  child: any[];
  as: ElementType<any> | undefined;
};

const AppDropdown = ({ name, child, as }: AppDropdownTypes) => {
  const router = useRouter();
  return (
    <Menu as={as} className="relative inline-block ltr:text-left rtl:text-right">
      <div>
        <Menu.Button>
          <div className="flex flex-row gap-2 justify-between items-center text-gray-400 uppercase font-bold hover:text-white transition-all duration-700">
            <div className="md:block ltr:md:ml-2 rtl:md:mr-2 truncate" style={{ maxWidth: '7rem' }}>
              {name}
            </div>
            <ChevronDownIcon
              className="w-5 h-5 ltr:ml-2 rtl:mr-2 ltr:-mr-1 rtl:-ml-1 text-violet-200 hover:text-violet-100"
              aria-hidden="true"
            />
          </div>
        </Menu.Button>
      </div>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute ltr:right-0 rtl:left-0 w-56 mt-2 origin-top-right bg-layout divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-50">
          <div className="px-1 py-1 ">
            {child.map(item => {
              return (
                <Menu.Item key={item}>
                  {({ active }) => (
                    <button
                      type="button"
                      className={`${
                        active || router.pathname.includes(item.link) ? 'text-white' : 'text-gray-400'
                      } group flex rounded-md items-center w-full px-2 py-2 text-sm uppercase font-bold hover:text-white transition-all duration-700`}
                    >
                      <Link href={item.link}>{item.name}</Link>
                    </button>
                  )}
                </Menu.Item>
              );
            })}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default AppDropdown;
