import { InboxIcon } from '@heroicons/react/outline';

type AppEmptyProps = {
  message?: string;
};

export const AppEmpty = ({ message = 'no records' }: AppEmptyProps) => {
  return (
    <div className="flex flex-row justify-center items-center p-20 uppercase">
      <div className="flex flex-col gap-4 justify-center items-center">
        <InboxIcon className="w-16" />
        <span>{message}</span>
      </div>
    </div>
  );
};

