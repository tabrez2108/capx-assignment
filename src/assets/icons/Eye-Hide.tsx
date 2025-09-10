import React, { FC, MouseEventHandler, SVGProps } from 'react';

interface EyeHideIconProps extends SVGProps<SVGSVGElement> {
  className?: string;
  onClick?: MouseEventHandler<SVGSVGElement>;
}

const EyeHideIcon: FC<EyeHideIconProps> = ({ className, onClick, ...rest }) => {
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
      <path d="M1.4,0.2c-0.3-0.3-0.9-0.3-1.2,0s-0.3,0.9,0,1.2l18.3,18.3c0.3,0.3,0.9,0.3,1.2,0s0.3-0.9,0-1.2l-3.3-3.3c0.1-0.1,0.2-0.2,0.3-0.2c1.6-1.5,2.7-3.3,3.2-4.6c0.1-0.3,0.1-0.6,0-0.9c-0.5-1.2-1.6-3-3.2-4.6C15,3.5,12.8,2.2,10,2.2c-2,0-3.7,0.6-5.1,1.5L1.4,0.2z M7.1,5.9C7.9,5.3,8.9,5,10,5c2.8,0,5,2.2,5,5c0,1.1-0.3,2.1-0.9,2.9l-1.2-1.2c0.4-0.7,0.6-1.7,0.4-2.6c-0.5-1.8-2.3-2.8-4.1-2.4C8.8,6.9,8.6,7,8.3,7.1L7.1,5.9L7.1,5.9z M11.3,14.8C10.9,14.9,10.4,15,10,15c-2.8,0-5-2.2-5-5c0-0.4,0.1-0.9,0.2-1.3L2.4,5.9C1.3,7.2,0.5,8.6,0.1,9.6C0,9.8,0,10.1,0.1,10.4c0.5,1.2,1.6,3,3.2,4.6c1.6,1.5,3.9,2.8,6.7,2.8c1.3,0,2.5-0.3,3.5-0.7L11.3,14.8L11.3,14.8z"/>
    </svg>
  );
};

export default EyeHideIcon;
