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
      <path d="M16.2,13.1H8.8c-0.3,0-0.6-0.3-0.6-0.6v-10c0-0.3,0.3-0.6,0.6-0.6H14c0.2,0,0.3,0.1,0.4,0.2l2.3,2.3c0.1,0.1,0.2,0.3,0.2,0.4v7.7C16.9,12.8,16.6,13.1,16.2,13.1z M8.8,15h7.5c1.4,0,2.5-1.1,2.5-2.5V4.8c0-0.7-0.3-1.3-0.7-1.8l-2.3-2.3C15.3,0.3,14.6,0,14,0H8.8C7.4,0,6.2,1.1,6.2,2.5v10C6.2,13.9,7.4,15,8.8,15z M3.8,5C2.4,5,1.2,6.1,1.2,7.5v10c0,1.4,1.1,2.5,2.5,2.5h7.5c1.4,0,2.5-1.1,2.5-2.5v-0.6h-1.9v0.6c0,0.3-0.3,0.6-0.6,0.6H3.8c-0.3,0-0.6-0.3-0.6-0.6v-10c0-0.3,0.3-0.6,0.6-0.6h0.6V5H3.8z"/>
    </svg>
  );
};

export default CopyIcon;
