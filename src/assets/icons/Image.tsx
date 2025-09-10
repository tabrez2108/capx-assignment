import React, { FC, MouseEventHandler, SVGProps } from 'react';

interface ImageIconProps extends SVGProps<SVGSVGElement> {
  className?: string;
  onClick?: MouseEventHandler<SVGSVGElement>;
}

const ImageIcon: FC<ImageIconProps> = ({ className, onClick, ...rest }) => {
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
      <path d="M2.9,2.1c-0.4,0-0.7,0.3-0.7,0.7v14.3c0,0.4,0.3,0.7,0.7,0.7h14.3c0.4,0,0.7-0.3,0.7-0.7V2.9c0-0.4-0.3-0.7-0.7-0.7H2.9zM0,2.9C0,1.3,1.3,0,2.9,0h14.3C18.7,0,20,1.3,20,2.9v14.3c0,1.6-1.3,2.9-2.9,2.9H2.9C1.3,20,0,18.7,0,17.1V2.9z M5.7,4.3c0.8,0,1.4,0.6,1.4,1.4S6.5,7.1,5.7,7.1S4.3,6.5,4.3,5.7S4.9,4.3,5.7,4.3z M11.8,7.5c0.4,0,0.7,0.2,0.9,0.5l3.6,6.1c0.2,0.3,0.2,0.7,0,1.1c-0.2,0.3-0.5,0.5-0.9,0.5H4.6c-0.4,0-0.8-0.2-1-0.6c-0.2-0.4-0.2-0.8,0.1-1.1l2.5-3.6C6.5,10.2,6.8,10,7.1,10s0.7,0.2,0.9,0.5l0.8,1.1L10.9,8C11.1,7.7,11.4,7.5,11.8,7.5L11.8,7.5z"/>
    </svg>
  );
};

export default ImageIcon;
