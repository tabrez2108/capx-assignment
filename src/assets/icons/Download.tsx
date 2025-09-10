import React, { FC, MouseEventHandler, SVGProps } from 'react';

interface DownloadIconProps extends SVGProps<SVGSVGElement> {
  className?: string;
  onClick?: MouseEventHandler<SVGSVGElement>;
}

const DownloadIcon: FC<DownloadIconProps> = ({ className, onClick, ...rest }) => {
  console.log('Icon rendered');

  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      onClick={onClick}
      {...rest}
    >
      <path d="M11.3,1.3C11.3,0.6,10.7,0,10,0S8.7,0.6,8.7,1.3v8.8L6.9,8.4c-0.5-0.5-1.4-0.5-1.9,0s-0.5,1.4,0,1.9l4,4c0.5,0.5,1.4,0.5,1.9,0l4-4c0.5-0.5,0.5-1.4,0-1.9c-0.5-0.5-1.4-0.5-1.9,0l-1.7,1.7V1.3z M3.3,13.3c-1.5,0-2.7,1.2-2.7,2.7v1.3c0,1.5,1.2,2.7,2.7,2.7h13.3c1.5,0,2.7-1.2,2.7-2.7V16c0-1.5-1.2-2.7-2.7-2.7h-2l-2.4,2.4c-1.3,1.3-3.4,1.3-4.7,0l-2.4-2.4H3.3zM16,15.7c0.6,0,1,0.4,1,1c0,0.6-0.4,1-1,1c-0.6,0-1-0.4-1-1C15,16.1,15.4,15.7,16,15.7z"/>
    </svg>
  );
};

export default DownloadIcon;
