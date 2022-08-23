import { ReactNode } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AppHeader from '@shared/app_header';
import AppFooter from '@shared/app_footer';

type Props = {
  children: ReactNode;
};

const UserLayout = ({ children }: Props) => {
  return (
    <div>
      <AppHeader />
      <ToastContainer />
      <main className="w-full h-full">{children}</main>
      <AppFooter />
    </div>
  );
};

export default UserLayout;
