import React, { ReactNode, useState } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import AppSidebar from '@shared/app_sidebar';
import AppDrawer from '@shared/app_drawer';
import AppHeaderUser from '@shared/app_header_admin';

type Props = {
  children: ReactNode;
};

const AdminLayout = ({ children }: Props) => {
  const [drawer, setDrawer] = useState<boolean>(false);
  return (
    <div className="w-full">
      <AppDrawer open={drawer} setOpen={setDrawer}>
        <AppSidebar setDrawer={setDrawer} />
      </AppDrawer>
      <div className="min-h-full app-row bg-background">
        <div className="hidden md:block fixed z-30">
          <div className="lg:app-drawer md:w-24 hover:md:app-drawer h-screen">
            <AppSidebar />
          </div>
        </div>
      </div>
      <div className="app-col lg:pl-64 md:pl-24 h-screen">
        <AppHeaderUser openDrawer={setDrawer} />
        <div className="flex-grow bg-background">
          <main className="h-full lg:px-10 md:px-10 px-2 py-6">{children}</main>
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
