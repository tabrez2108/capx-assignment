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
      <g>
        <path d="M18.2,15.9c0-1.3,0-2.5,0-2.5c0,0,0.2,0,0.3,0s0.5,0,1.3,0.1V20H0.1l0-1.6c0-0.9,0.1-2.4,0.1-4.9h1.6v4.9h16.4L18.2,15.9z"/>
        <path d="M7.8,13.3c0.8,1.1,1.6,2.3,1.8,2.5v0c0.2,0.3,0.4,0.5,0.4,0.5c0,0,0.6-0.8,1.3-1.8c0.7-1,1.8-2.5,2.4-3.4c0.6-0.9,1.1-1.6,1.1-1.7c0,0-0.7-0.1-3-0.1l-0.1-0.2c0-0.1-0.1-0.5-0.1-0.9c0-0.3-0.1-0.8-0.1-1c0-0.2-0.1-0.9-0.2-1.5c-0.1-0.6-0.1-1.3-0.2-1.6c0-0.3-0.1-0.8-0.1-1.2c0-0.4-0.1-0.9-0.1-1.3S11,0.9,10.9,0H10C9.5,0,9.2,0,9.2,0.1c0,0-0.1,0.4-0.1,0.8c0,0.4-0.1,1.1-0.2,1.6C8.9,2.9,8.8,3.7,8.8,4.3C8.7,4.8,8.6,5.5,8.6,5.7C8.6,6,8.5,6.5,8.5,7c0,0.4-0.1,1-0.1,1.2c0,0.2-0.1,0.6-0.1,1.3H6.7c-1.2,0-1.5,0-1.5,0.1c0,0,0.2,0.3,0.3,0.5c0.2,0.2,0.5,0.6,0.6,0.8C6.3,11.1,7,12.2,7.8,13.3z"/>
      </g>
    </svg>
  );
};

export default DownloadIcon;
