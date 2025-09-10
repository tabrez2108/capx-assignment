import React, {
  ReactElement,
  ChangeEvent,
  FocusEvent,
  useState,
  ReactNode,
} from "react";
import { Input } from "@heroui/react";
import clsx from "clsx";
import EyeShowIcon from "@/assets/icons/Eye-Show";
import EyeHideIcon from "@/assets/icons/Eye-Hide";

type InputFieldType = "textField" | "passwordField" | "dateField" | "timeField";

interface CustomInputFieldProps {
  inputType: InputFieldType;
  type?: string;
  label?: string;
  id?: string;
  name?: string;
  value?: string | number;
  helperText?: string;
  errorText?: string;
  startContent?: ReactElement; // ✅ changed from ReactNode
  endContent?: ReactElement; // ✅ changed from ReactNode
  placeholder?: string;
  defaultValue?: string | number;
  isDisabled?: boolean;
  isInvalid?: boolean;
  isRequired?: boolean;
  isReadOnly?: boolean;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  onValueChange?: (value: string | number) => void;
  onClear?: () => void;
  onBlur?: (e: FocusEvent<HTMLInputElement>) => void;
  classLabelTitle?: string;
  classStartContent?: string;
  classEndContent?: string;
  classFormControl?: string;
  classBase?: string;
  classMainWrapper?: string;
  classInputWrapper?: string;
  classInnerWrapper?: string;
  classInputField?: string;
  classPasswordBtn?: string;
  classPasswordIcon?: string;
  classHelperText?: string;
  classErrorText?: string;
}

const CustomInputField: React.FC<CustomInputFieldProps> = ({
  inputType,
  type = "text",
  label,
  id,
  name,
  value,
  helperText,
  errorText,
  startContent,
  endContent,
  placeholder,
  defaultValue,
  isDisabled,
  isInvalid,
  isRequired,
  isReadOnly,
  onChange,
  onValueChange,
  onClear,
  onBlur,
  classLabelTitle,
  classStartContent,
  classEndContent,
  classFormControl,
  classBase,
  classMainWrapper,
  classInputWrapper,
  classInnerWrapper,
  classInputField,
  classPasswordBtn,
  classPasswordIcon,
  classHelperText,
  classErrorText,
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const requireString = "*";

  // ✅ Utility to safely merge className into cloned element
  function cloneWithClassName(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    element: ReactElement<any> | undefined,
    extraClass: string
  ) {
    if (!element) return undefined;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const prevClass = (element.props as any).className ?? "";
    return React.cloneElement(element, {
      className: clsx(prevClass, extraClass),
    });
  }

  const renderLabel = () =>
    label ? (
      <label
        htmlFor={id}
        className={clsx(
          "text-white text-sm font-normal block mb-1",
          classLabelTitle
        )}
      >
        {label}
        {isRequired && (
          <span className="text-danger ml-1.5">{requireString}</span>
        )}
      </label>
    ) : null;

  const renderHelperAndError = () => (
    <>
      {helperText && (
        <span
          className={clsx(
            "text-white text-xs font-normal block mt-1",
            classHelperText
          )}
        >
          {helperText}
        </span>
      )}
      {errorText && (
        <span
          className={clsx(
            "text-danger text-xs font-normal block mt-1",
            classErrorText
          )}
        >
          {errorText}
        </span>
      )}
    </>
  );

  const renderInput = (inputTypeProp: string, inputEndContent?: ReactNode) => (
    <Input
      id={id}
      type={inputTypeProp}
      name={name}
      value={value}
      isDisabled={isDisabled}
      isInvalid={isInvalid}
      isRequired={isRequired}
      isReadOnly={isReadOnly}
      placeholder={placeholder}
      defaultValue={defaultValue}
      onChange={onChange}
      onValueChange={onValueChange}
      onClear={onClear}
      onBlur={onBlur}
      classNames={{
        base: clsx("group duration-300 transition-all ease-in-out", classBase),
        mainWrapper: classMainWrapper ?? "",
        inputWrapper: [
          clsx(
            "h-[unset] min-h-[unset] bg-transparent px-0 duration-300 transition-all ease-in-out",
            classInputWrapper
          ),
          "group-data-[focus-visible=true]:ring-0 group-data-[focus-visible=true]:ring-offset-0",
          "group-data-[readonly=true]:opacity-50 group-data-[readonly=true]:pointer-events-none",
        ],
        innerWrapper: [
          clsx(
            "min-h-12 bg-secondary border border-darkBronze rounded-full shadow-none flex items-center gap-2.5 px-4 py-2 relative duration-300 transition-all ease-in-out max-md:min-h-11.5",
            classInnerWrapper
          ),
          "hover:border-primary",
          "group-data-[focus=true]:bg-secondary group-data-[focus=true]:border-primary",
          "group-data-[focus-visible=true]:bg-secondary group-data-[focus-visible=true]:border-primary",
          "group-data-[focus-within=true]:bg-secondary group-data-[focus-within=true]:border-primary",
          "group-data-[disabled=true]:opacity-50 group-data-[disabled=true]:grayscale",
          "group-data-[invalid=true]:bg-danger/20 group-data-[invalid=true]:border-danger group-data-[invalid=true]:hover:border-danger",
        ],
        input: [
          clsx(
            "w-full text-white text-base font-normal duration-300 transition-all ease-in-out focus-visible:outline-0 placeholder:text-darkBronze text-base font-normal",
            classInputField
          ),
          inputType === "dateField" ? "date-picker-input" : "",
          inputType === "timeField" ? "time-picker-input" : "",
        ],
      }}
      startContent={cloneWithClassName(
        startContent,
        clsx(
          "w-4 h-4 fill-current cursor-pointer group-hover:fill-current group-data-[focus=true]:fill-current",
          classStartContent
        )
      )}
      endContent={
        inputEndContent ??
        cloneWithClassName(
          endContent,
          clsx(
            "w-4 h-4 fill-current cursor-pointer group-hover:fill-current group-data-[focus=true]:fill-current",
            classEndContent
          )
        )
      }
    />
  );

  const renderPasswordEndContent = () => (
    <button
      type="button"
      onClick={() => setShowPassword(!showPassword)}
      className={clsx(classPasswordBtn)}
    >
      {showPassword ? (
        <EyeShowIcon
          className={clsx(
            "w-4 h-4 fill-current cursor-pointer group-hover:fill-current",
            classPasswordIcon
          )}
        />
      ) : (
        <EyeHideIcon
          className={clsx(
            "w-4 h-4 fill-current cursor-pointer group-hover:fill-current",
            classPasswordIcon
          )}
        />
      )}
    </button>
  );

  switch (inputType) {
    case "textField":
      return (
        <div className={clsx("w-full mb-6 relative", classFormControl)}>
          {renderLabel()}
          {renderInput(type)}
          {renderHelperAndError()}
        </div>
      );

    case "passwordField":
      return (
        <div className={clsx("w-full mb-6 relative", classFormControl)}>
          {renderLabel()}
          {renderInput(
            showPassword ? "text" : "password",
            renderPasswordEndContent()
          )}
          {renderHelperAndError()}
        </div>
      );

    case "dateField":
      return (
        <div className={clsx("w-full mb-6 relative", classFormControl)}>
          {renderLabel()}
          {renderInput("date")}
          {renderHelperAndError()}
        </div>
      );

    case "timeField":
      return (
        <div className={clsx("w-full mb-6 relative", classFormControl)}>
          {renderLabel()}
          {renderInput("time")}
          {renderHelperAndError()}
        </div>
      );

    default:
      return null;
  }
};

export default CustomInputField;
