import React, { FC, MouseEventHandler, SVGProps } from 'react';

interface ChevronUpIconProps extends SVGProps<SVGSVGElement> {
  className?: string;
  onClick?: MouseEventHandler<SVGSVGElement>;
}

const ChevronUpIcon: FC<ChevronUpIconProps> = ({ className, onClick, ...rest }) => {
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
      <path d="M20,14.5c0,0.2-0.1,0.5-0.3,0.7c-0.4,0.4-1,0.4-1.4,0L10,6.8l-8.4,8.4c-0.4,0.4-1,0.4-1.4,0s-0.4-1,0-1.4l9-9c0.4-0.4,1-0.4,1.4,0l9,9C19.9,14,20,14.3,20,14.5z"/>
    </svg>
  );
};

export default ChevronUpIcon;
