import { Dispatch, SetStateAction } from 'react';
import AppMenuProfile from './app_menu_profile';
import { AppMenuIcon } from './app_menu_icon';
// import AppGoogleTranslate from '../../../elements/app_google_translate';
type HeaderUserProps = {
  openDrawer: Dispatch<SetStateAction<boolean>>;
};
export const AppHeaderUser = ({ openDrawer }: HeaderUserProps) => {
  return (
    <div className="inline py-2 h-16 shadow-lg sticky top-0 z-10 bg-white items-center">
      <div className="flex flex-row w-full px-4 justify-between items-center">
        <div className="w-1/2">
          <AppMenuIcon toggle={openDrawer} />
        </div>

        <div className="flex flex-row w-1/2 h-full justify-end items-center gap-6">
          <AppMenuProfile />
        </div>
      </div>
    </div>
  );
};
