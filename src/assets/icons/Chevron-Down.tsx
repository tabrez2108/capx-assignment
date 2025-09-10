import React, { FC, MouseEventHandler, SVGProps } from 'react';

interface ChevronDownIconProps extends SVGProps<SVGSVGElement> {
  className?: string;
  onClick?: MouseEventHandler<SVGSVGElement>;
}

const ChevronDownIcon: FC<ChevronDownIconProps> = ({ className, onClick, ...rest }) => {
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
      <path d="M0,5.5C0,5.2,0.1,5,0.3,4.8c0.4-0.4,1-0.4,1.4,0l8.4,8.4l8.4-8.4c0.4-0.4,1-0.4,1.4,0c0.4,0.4,0.4,1,0,1.4l-9,9c-0.4,0.4-1,0.4-1.4,0l-9-9C0.1,6,0,5.7,0,5.5z"/>
    </svg>
  );
};

export default ChevronDownIcon;
