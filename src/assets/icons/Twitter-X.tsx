import React, { FC, MouseEventHandler, SVGProps } from 'react';

interface TwitterXIconProps extends SVGProps<SVGSVGElement> {
  className?: string;
  onClick?: MouseEventHandler<SVGSVGElement>;
}

const TwitterXIcon: FC<TwitterXIconProps> = ({ className, onClick, ...rest }) => {
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
      <path d="M15.7,1h3.1l-6.7,7.7L20,19h-6.2L9,12.7L3.5,19H0.4l7.2-8.2L0,1h6.3l4.4,5.8L15.7,1z M14.7,17.2h1.7L5.4,2.7H3.6L14.7,17.2z"/>
    </svg>
  );
};

export default TwitterXIcon;
