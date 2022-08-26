import { ReactNode } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import AppHeader from '@shared/app_header';
import AppFooter from '@shared/app_footer';

type Props = {
  children: ReactNode;
};

const AdminLayout = ({ children }: Props) => {
  return (
    <div className="w-full">
      <AppHeader />
      <p>admin</p>
      <main className="w-full h-full">{children}</main>
      <AppFooter />
    </div>
  );
};

export default AdminLayout;
