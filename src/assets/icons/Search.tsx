import React, { FC, MouseEventHandler, SVGProps } from 'react';

interface SearchIconProps extends SVGProps<SVGSVGElement> {
  className?: string;
  onClick?: MouseEventHandler<SVGSVGElement>;
}

const SearchIcon: FC<SearchIconProps> = ({ className, onClick, ...rest }) => {
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
      <path d="M16.2,8.1c0,1.8-0.6,3.4-1.6,4.8l4.9,4.9c0.5,0.5,0.5,1.3,0,1.8c-0.5,0.5-1.3,0.5-1.8,0l-4.9-4.9c-1.3,1-3,1.6-4.8,1.6C3.6,16.2,0,12.6,0,8.1S3.6,0,8.1,0S16.2,3.6,16.2,8.1z M8.1,13.7c3.1,0,5.6-2.5,5.6-5.6s-2.5-5.6-5.6-5.6S2.5,5,2.5,8.1S5,13.7,8.1,13.7z"/>
    </svg>
  );
};

export default SearchIcon;
