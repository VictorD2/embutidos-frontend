import React, { useEffect, useState } from 'react';

// Icons
import { PhotographIcon } from '@heroicons/react/outline';
import { toast } from 'react-toastify';

// Types
type InputEvent = React.ChangeEvent<HTMLInputElement>;
type AppInputImageProps = {
  name: string;
  value: string;
  label?: string;
  onChange: Function;
  helpText?: string;
  helpColor?: string;
  labelColor?: string;
  fileTypeMessage?: string;
  fileType?: string[];
};

export const AppInputImage = ({
  name,
  value,
  label,
  fileType = ['image/svg+xml', 'image/png', 'image/jpeg', 'image/jpg'],
  fileTypeMessage = '.jpg, .png, .svg',
  onChange,
  helpText,
  helpColor = 'text-red-500',
  labelColor = 'text-gray-700',
}: AppInputImageProps) => {
  const classNames = (...classes: any): string => {
    return classes.filter(Boolean).join(' ');
  };

  const [selectedFile, setSelectedFile] = useState<File>();
  const [preview, setPreview] = useState('');

  useEffect(() => {
    if (!selectedFile) return setPreview('');

    const objectUrl = URL.createObjectURL(selectedFile);
    setPreview(objectUrl);

    // free memory when ever this component is unmounted
    return () => URL.revokeObjectURL(objectUrl);
  }, [selectedFile]);

  const onSelectFile = (e: InputEvent) => {
    if (!e.target.files || e.target.files.length === 0) return setSelectedFile(undefined);
    if (!fileType.includes(e.target.files[0].type)) {
      toast.warning('That file type is not supported');
      setSelectedFile(undefined);
      return;
    }
    setSelectedFile(e.target.files[0]);
    onChange(e);
  };
  return (
    <div className="flex flex-col items-start">
      {label && (
        <div className="my-2">
          <label htmlFor={name} className={classNames('block text-sm font-medium mt-1', labelColor)}>
            {label}
          </label>
        </div>
      )}
      <label className="cursor-pointer border-dashed border-2 border-gray-400 w-full p-4">
        {value && !selectedFile && (
          <div className="flex flex-row justify-center items-center max-h-20 h-20">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={value} alt="" width={100} height={100} />
          </div>
        )}

        {!value && !selectedFile && (
          <div className="flex flex-row justify-center items-center gap-4 max-h-20 h-20">
            <PhotographIcon className="h-16 w-16" />
            <div className="body-2">{`${fileTypeMessage}`}</div>
          </div>
        )}
        {selectedFile && (
          <div className="flex flex-row justify-center items-center max-h-20 h-20">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={preview} alt="" width={100} height={100} />
          </div>
        )}
        <input name={name} type="file" className="hidden" onChange={onSelectFile} />
      </label>
      {helpText && <div className={classNames(helpColor, 'caption mt-1')}>{helpText}</div>}
    </div>
  );
};
