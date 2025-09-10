import React, { FC, MouseEventHandler, SVGProps } from 'react';

interface ChevronLeftIconProps extends SVGProps<SVGSVGElement> {
  className?: string;
  onClick?: MouseEventHandler<SVGSVGElement>;
}

const ChevronLeftIcon: FC<ChevronLeftIconProps> = ({ className, onClick, ...rest }) => {
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
      <path d="M14.5,0c0.2,0,0.5,0.1,0.7,0.3c0.4,0.4,0.4,1,0,1.4L6.8,10l8.4,8.4c0.4,0.4,0.4,1,0,1.4s-1,0.4-1.4,0l-9-9c-0.4-0.4-0.4-1,0-1.4l9-9C14,0.1,14.3,0,14.5,0z"/>
    </svg>
  );
};

export default ChevronLeftIcon;
