import { useRouter } from 'next/router';
import Ripples from 'react-ripples';

// Types
type AppMenuItemProps = {
  slug: string;
  Icon: any;
  link: string;
  bgActive?: string;
  bgHover?: string;
  textColor?: string;
  textHover?: string;
  setDrawer?: Function;
};

export const AppMenuItem = ({
  setDrawer,
  slug,
  Icon,
  link,
  bgActive = 'bg-primary',
  bgHover = 'bg-gray-700',
  textColor = 'text-white',
  textHover = 'text-gray-300',
}: AppMenuItemProps) => {
  const router = useRouter();

  const classNames = (...classes: any): string => {
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
            router.pathname.includes(link) ? bgActive + ' hover:' + bgActive : 'hover:' + bgHover + ' cursor-pointer',
            textColor,
            'hover:' + textHover,
            'items-center flex w-full py-2 px-4 rounded-md  gap-3 item_sidebar'
          )}
        >
          <div className={classNames(textColor, 'hover:' + textHover, 'flex-shrink-0 h-5 w-6 flex items-center')}>
            <Icon className="w-full"></Icon>
            {/* <i className={`${icon} flex items-center justify-center`}></i> */}
          </div>
          <span className="ease-in duration-300 uppercase text-sm">{slug}</span>
        </div>
      </Ripples>
    </div>
  );
};
