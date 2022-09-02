/* eslint-disable max-len */
/* eslint-disable object-curly-newline */
/* eslint-disable react/require-default-props */
/* eslint-disable @typescript-eslint/ban-types */
import React from 'react';
import { useRouter } from 'next/router';
import Ripples from 'react-ripples';

// Types
type AppMenuItemProps = {
  slug: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  Icon: any;
  link: string;
  bgActive?: string;
  bgHover?: string;
  textColor?: string;
  textHover?: string;
  setDrawer?: Function;
};

const AppMenuItem = ({ setDrawer, slug, Icon, link, bgActive, bgHover, textColor, textHover }: AppMenuItemProps) => {
  const router = useRouter();

  const classNames = (...classes: string[]): string => {
    return classes.filter(Boolean).join(' ');
  };

  return (
    <div className="py-1 px-4">
      <Ripples
        onClick={() => {
          if (setDrawer) setDrawer(false);
          router.push(link);
        }}
        className="w-full"
      >
        <div
          className={classNames(
            router.pathname.includes(link) ? `${bgActive} hover:${bgActive}` : `hover:${bgHover} cursor-pointer`,
            `${textColor}`,
            `hover:${textHover}`,
            // eslint-disable-next-line comma-dangle
            'items-center flex w-full py-2 px-4 rounded-md  gap-3 item_sidebar'
          )}
        >
          <div className={classNames(`${textColor}`, `hover:${textHover}`, 'flex-shrink-0 h-5 w-6 flex items-center')}>
            <Icon className="w-full" />
            {/* <i className={`${icon} flex items-center justify-center`}></i> */}
          </div>
          <span className="ease-in duration-300 uppercase text-sm">{slug}</span>
        </div>
      </Ripples>
    </div>
  );
};

AppMenuItem.defaultProps = {
  bgActive: 'bg-primary',
  bgHover: 'bg-gray-700',
  textColor: 'text-white',
  textHover: 'text-gray-300',
};

export default AppMenuItem;
