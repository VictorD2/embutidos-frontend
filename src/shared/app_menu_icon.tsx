import { Dispatch, SetStateAction } from 'react';

// Icons
import Hamburger from 'hamburger-react';

// Types
type AppMenuIconProps = {
  toggle?: Dispatch<SetStateAction<boolean>>;
  text?: string;
  color?: string;
};

export const AppMenuIcon = ({ toggle, color = '#000000' }: AppMenuIconProps) => {
  return (
    <div className="flex flex-row justify-between items-center gap-2 md:hidden">
      <Hamburger rounded color={color} duration={0.5} toggle={toggle} />
    </div>
  );
};
