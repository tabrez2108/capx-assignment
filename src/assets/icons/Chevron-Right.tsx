import React, { FC, MouseEventHandler, SVGProps } from 'react';

interface ChevronRightIconProps extends SVGProps<SVGSVGElement> {
  className?: string;
  onClick?: MouseEventHandler<SVGSVGElement>;
}

const ChevronRightIcon: FC<ChevronRightIconProps> = ({ className, onClick, ...rest }) => {
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
      <path d="M5.5,20c-0.2,0-0.5-0.1-0.7-0.3c-0.4-0.4-0.4-1,0-1.4l8.4-8.4L4.8,1.6c-0.4-0.4-0.4-1,0-1.4c0.4-0.4,1-0.4,1.4,0l9,9c0.4,0.4,0.4,1,0,1.4l-9,9C6,19.9,5.7,20,5.5,20z"/> 
    </svg>
  );
};

export default ChevronRightIcon;
