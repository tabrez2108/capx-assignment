import React, { FC, MouseEventHandler, SVGProps } from 'react';

interface EyeShowIconProps extends SVGProps<SVGSVGElement> {
  className?: string;
  onClick?: MouseEventHandler<SVGSVGElement>;
}

const EyeShowIcon: FC<EyeShowIconProps> = ({ className, onClick, ...rest }) => {
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
      <path d="M10,2.2C7.2,2.2,4.9,3.5,3.3,5C1.7,6.5,0.6,8.3,0.1,9.6C0,9.8,0,10.2,0.1,10.4c0.5,1.2,1.6,3,3.2,4.6c1.6,1.5,3.9,2.8,6.7,2.8s5.1-1.3,6.7-2.8c1.6-1.5,2.7-3.3,3.2-4.6c0.1-0.3,0.1-0.6,0-0.9c-0.5-1.2-1.6-3-3.2-4.6C15.1,3.5,12.8,2.2,10,2.2z M5,10c0-2.8,2.2-5,5-5s5,2.2,5,5s-2.2,5-5,5S5,12.8,5,10z M10,7.8C10,9,9,10,7.8,10C7.4,10,7,9.9,6.7,9.7c0,0.4,0,0.8,0.1,1.2c0.5,1.8,2.3,2.8,4.1,2.4c1.8-0.5,2.8-2.3,2.4-4.1c-0.4-1.6-1.9-2.6-3.5-2.5C9.9,7,10,7.4,10,7.8z"/>
    </svg>
  );
};

export default EyeShowIcon;
