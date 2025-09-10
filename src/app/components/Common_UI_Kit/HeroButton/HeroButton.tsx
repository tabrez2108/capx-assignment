import React, { ReactElement, MouseEventHandler, ReactNode } from "react";
import { Button, ButtonGroup, ButtonProps } from "@heroui/react";
import ChevronDownIcon from "@/assets/icons/Chevron-Down";
// import LoadingSpinner from "./sub-components/LoadingSpinner";

interface HeroButtonProps extends Omit<ButtonProps, "className"> {
  buttonType?: "primary" | "secondary" | "textBtn" | "default";
  buttonLarge?: boolean;
  dropdownArrowBtn?: boolean;
  buttonGroup?: boolean;
  label?: string;
  icon?: ReactElement;
  children?: ReactNode;
  startContent?: ReactElement;
  endContent?: ReactElement;
  className?: string;
  classLabel?: string;
  classChildren?: string;
  classStartContent?: string;
  classEndContent?: string;
  classIcon?: string;
  classBtnArrow?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

const HeroButton: React.FC<HeroButtonProps> = ({
  buttonType = "default",
  type = "button",
  variant = "solid",
  buttonLarge = false,
  isIconOnly = false,
  isDisabled = false,
  isLoading = false,
  dropdownArrowBtn = false,
  buttonGroup = false,
  onClick,
  label,
  icon,
  children,
  startContent,
  endContent,
  className,
  classLabel,
  classChildren,
  classStartContent,
  classEndContent,
  classIcon,
  classBtnArrow,
  ...rest
}) => {
  const buttonStyles: Record<string, string> = {
    primary: "bg-primary border-primary text-white [&_svg]:fill-white",
    secondary: "bg-secondary border-secondary text-white [&_svg]:fill-white",
    textBtn: "!min-w-[unset] !min-h-[unset] bg-transparent shadow-none p-0",
    default: "",
  };

  const commonClasses = `duration-300 transition-all ease-in-out group 
  ${buttonLarge ? "text-lg px-4 py-2" : ""} 
  ${isIconOnly ? "p-2" : ""}`;

  function cloneWithClassName(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    element: ReactElement<any> | undefined,
    extraClass: string
  ) {
    if (!element) return null;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const prevClass = (element.props as any).className ?? "";
    return React.cloneElement(element, {
      className: `${prevClass} ${extraClass}`,
    });
  }

  const clonedStartContent = cloneWithClassName(
    startContent,
    `${classStartContent ?? ""} w-4 h-4 fill-current transition-all duration-300 ease-in-out group-hover:fill-current`
  );

  const clonedEndContent = cloneWithClassName(
    endContent,
    `${classEndContent ?? ""} w-4 h-4 fill-current transition-all duration-300 ease-in-out group-hover:fill-current`
  );

  const clonedIcon = cloneWithClassName(
    icon,
    `${classIcon ?? ""} w-4 h-4 fill-current transition-all duration-300 ease-in-out group-hover:fill-current`
  );

  const renderButton = (
    <Button
      {...rest}
      className={`w-fit min-w-11 min-h-11 border rounded-full text-base font-semibold flex justify-center items-center gap-1.5 cursor-pointer outline-none px-5 py-3 [&_svg]:w-4 [&_svg]:h-4 ${className ?? ""} ${commonClasses} ${buttonStyles[buttonType]} ${
        isDisabled ? "cursor-not-allowed" : ""
      }`}
      type={type}
      onClick={onClick}
      variant={variant}
      isIconOnly={isIconOnly}
      isDisabled={isDisabled}
      isLoading={isLoading}
      // spinner={<LoadingSpinner />}
      startContent={clonedStartContent}
      endContent={clonedEndContent}
    >
      {clonedIcon}
      {label && (
        <span className={`${classLabel ?? ""} transition-all duration-300 ease-in-out`}>
          {label}
        </span>
      )}
      {children && (
        <span className={`${classChildren ?? ""} transition-all duration-300 ease-in-out`}>
          {children}
        </span>
      )}
      {dropdownArrowBtn && (
        <ChevronDownIcon
          className={`${classBtnArrow ?? ""} w-3 h-3 me-2 fill-current transition-all duration-300 ease-in-out group-hover:fill-current`}
        />
      )}
    </Button>
  );

  return buttonGroup ? (
    <ButtonGroup isDisabled={isDisabled}>{renderButton}</ButtonGroup>
  ) : (
    renderButton
  );
};

export default HeroButton;
