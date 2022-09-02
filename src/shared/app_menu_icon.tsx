import React, { Dispatch, SetStateAction } from 'react';
import Hamburger from 'hamburger-react';

// Types
type AppMenuIconProps = {
  toggle: Dispatch<SetStateAction<boolean>>;
};

const AppMenuIcon = ({ toggle }: AppMenuIconProps) => {
  return (
    <div className="flex flex-row justify-between items-center gap-2 md:hidden">
      <Hamburger rounded duration={0.5} toggle={toggle} />
    </div>
  );
};

export default AppMenuIcon;
