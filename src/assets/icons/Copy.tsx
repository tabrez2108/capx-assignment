import React, { FC, MouseEventHandler, SVGProps } from 'react';

interface CopyIconProps extends SVGProps<SVGSVGElement> {
  className?: string;
  onClick?: MouseEventHandler<SVGSVGElement>;
}

const CopyIcon: FC<CopyIconProps> = ({ className, onClick, ...rest }) => {
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
      <path d="M3,2.9C3,3.2,3,4,3,4.7C3,5.3,3.1,7,3.1,8.4c0,1.5,0.1,4.3,0.2,6.4c0.1,2,0.1,3.7,0.1,3.7c0,0,2.8,0.1,6.2,0.2c3.4,0.1,6.2,0.2,6.3,0.2c0,0,0.1,0.1,0.1,1.1H1.8V2.2H3L3,2.9z"/>
      <path d="M8.4,0c3.7,0,4.4,0,4.6,0.1c0.2,0,0.4,0.1,0.5,0.2c0.1,0.1,0.3,0.2,0.4,0.2c0.1,0.1,0.5,0.5,0.9,1.1c0.5,0.5,1.2,1.4,1.7,2c0.5,0.6,0.9,1.1,1,1.2c0.1,0.1,0.2,0.3,0.3,0.4c0.1,0.1,0.2,0.4,0.3,0.8l0,11.7H4.1V0H8.4z M5.6,1.5v14.8h11.1c0-1.5-0.1-3.6-0.1-5.8l0-0.1c0-3.2,0-4-0.1-4.2c0-0.2-0.1-0.3-0.2-0.4c-0.1-0.1-0.3-0.3-0.5-0.4c-0.2-0.1-0.9-0.5-1.5-0.8c-0.6-0.3-1.2-0.6-1.2-0.6c0,0,0,0,0,0s0.1-0.1,0.2-0.3c0.1-0.1,0.2-0.3,0.3-0.5c0.1-0.1,0.2-0.3,0.2-0.5c0-0.1,0.1-0.3,0.1-0.4c0-0.1,0-0.3-0.1-0.4c-0.1-0.1-0.2-0.2-0.3-0.3c-0.1-0.1-0.3-0.1-0.5-0.2C12.6,1.5,12,1.5,9.1,1.5H5.6z" fillRule="evenodd" clipRule="evenodd"/>
    </g>
    </svg>
  );
};

export default CopyIcon;
