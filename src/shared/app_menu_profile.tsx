import { ChevronDownIcon } from '@heroicons/react/solid';
import { Menu, Transition } from '@headlessui/react';
import React, { Fragment } from 'react';
import { LogoutIcon, UserCircleIcon } from '@heroicons/react/outline';
import { useRouter } from 'next/router';
import { useAuth } from '@contexts/auth.context';
import ClsAuth from '@class/ClsAuth';

const AppMenuProfile = () => {
  const { user } = useAuth();
  const router = useRouter();
  const logOut = () => {
    ClsAuth.logOut();
    router.push('/login');
  };

  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button>
          <div className="app-row justify-between items-center">
            {/* <img className="inline-block h-12 w-12 rounded-full ring-2 ring-secondary" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" /> */}
            <img
              className="inline-block h-12 w-12 rounded-full ring-2 ring-secondary"
              src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80"
              alt=""
            />
            <div className="hidden md:block md:ml-2 truncate" style={{ maxWidth: '7rem' }}>
              {user.name}
            </div>
            <ChevronDownIcon className="w-5 h-5 ml-2 -mr-1 text-violet-200 hover:text-violet-100" aria-hidden="true" />
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
        <Menu.Items className="absolute right-0 w-56 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-50">
          <div className="px-1 py-1 ">
            <Menu.Item>
              {({ active }) => (
                <button
                  type="button"
                  className={`${
                    active || router.pathname === '/profile' ? 'bg-secondary text-white' : 'text-gray-900'
                  } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                >
                  <UserCircleIcon className="w-6 h-6 mr-6" />
                  Profile
                </button>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <button
                  type="button"
                  className={`${
                    active ? 'bg-secondary text-white' : 'text-gray-900'
                  } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                  onClick={logOut}
                >
                  <LogoutIcon className="w-6 h-6 mr-6" />
                  Logout
                </button>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};
export default AppMenuProfile;
