import React, { FC, MouseEventHandler, SVGProps } from 'react';

interface AtIconProps extends SVGProps<SVGSVGElement> {
  className?: string;
  onClick?: MouseEventHandler<SVGSVGElement>;
}

const AtIcon: FC<AtIconProps> = ({ className, onClick, ...rest }) => {
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
      <path d="M10,2.5c-4.1,0-7.5,3.4-7.5,7.5s3.4,7.5,7.5,7.5c0.7,0,1.2,0.6,1.2,1.2S10.7,20,10,20C4.5,20,0,15.5,0,10S4.5,0,10,0s10,4.5,10,10v1.2c0,2.1-1.7,3.8-3.8,3.8c-1.1,0-2.2-0.5-2.9-1.3C12.5,14.5,11.3,15,10,15c-2.8,0-5-2.2-5-5s2.2-5,5-5c1.1,0,2.1,0.3,2.9,0.9c0.2-0.2,0.5-0.3,0.8-0.3c0.7,0,1.2,0.6,1.2,1.2v4.4c0,0.7,0.6,1.2,1.2,1.2s1.2-0.6,1.2-1.2V10C17.5,5.9,14.1,2.5,10,2.5z M12.5,10c0-1.4-1.1-2.5-2.5-2.5S7.5,8.6,7.5,10s1.1,2.5,2.5,2.5S12.5,11.4,12.5,10z"/>
    </svg>
  );
};

export default AtIcon;
