import React, { ReactNode } from 'react';

export const BUTTON_STYLES_DATA = [
  {
    style: 'OUTLINE_BLACK',
    className:
      'text-vink-blue-dark px-5 py-3.5 border border-vink-blue-dark text-base font-medium',
  },
  {
    style: 'FILL',
    className:
      'text-white bg-vink-purple px-5 py-3.5 text-base font-medium border border-vink-purple',
  },
  {
    style: 'OUTLINE_GREEN',
    className:
      'text-vink-green-dark border border-vink-green-dark font-medium text-base px-5 py-3.5',
  },
  {
    style: 'LIGHT_PURPLE',
    className:
      'text-base font-medium text-white bg-vink-purple-light py-3.5 px-5',
  },
  {
    style: 'NONE',
    className: 'text-vink-black-dark font-medium text-base',
  },
] as const;

type BUTTON_STYLES = (typeof BUTTON_STYLES_DATA)[number]['style'];

type Props = {
  children?: ReactNode;
  title?: string;
  btnStyle?: BUTTON_STYLES;
  className?: string;
  type?: 'button' | 'submit';
  onClick?: (() => void) | (() => Promise<void>);
};

const Button = ({
  children,
  title,
  className,
  onClick,
  type = 'button',
  btnStyle = 'NONE',
}: Props) => {
  const btnChildren = children || title;
  const style = BUTTON_STYLES_DATA.find(
    tempBtnStyle => tempBtnStyle.style === btnStyle
  );
  const updateClassName = `${style?.className} ${className}`;

  return (
    <button type={type} className={updateClassName} onClick={onClick}>
      {btnChildren}
    </button>
  );
};

export default Button;
