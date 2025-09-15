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
      <path d="M0,2.3v15.4h20V2.3H0z M1.1,3.7h17.9l-0.4,13L1.4,16.3L1.1,3.7z M2.5,4.7v10.5h15.1V4.7H2.5z M4.7,5.8c0.6,0,1.1,0.5,1.1,1.1c0,0.6-0.5,1.1-1.1,1.1S3.7,7.4,3.7,6.8C3.7,6.3,4.2,5.8,4.7,5.8z M13.5,6.5L16,10l0.9,4.2H3.2l0.5-2.1L6.8,10l1.1,0.7l-0.7,1.4l0.7,0.7l2.5-3.5l1.4-0.4L13.5,6.5z"/>
    </svg>
  );
};

export default ImageIcon;
