import React, { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

const GuestLayout = ({ children }: Props) => {
  return <main className="w-full">{children}</main>;
};

export default GuestLayout;
