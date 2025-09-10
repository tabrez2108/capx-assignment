import React, { FC, MouseEventHandler, SVGProps } from 'react';

interface IconProps extends SVGProps<SVGSVGElement> {
  className?: string;
  onClick?: MouseEventHandler<SVGSVGElement>;
}

const Icon: FC<IconProps> = ({ className, onClick, ...rest }) => {
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
      <path d="" />
    </svg>
  );
};

export default Icon;
