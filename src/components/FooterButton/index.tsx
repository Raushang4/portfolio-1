import type { ComponentType, MouseEventHandler } from "react";
import { IconProps } from "../../Icons/utils";

export interface FooterButtonProps {
  title: string;
  icon: ComponentType<IconProps>;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  link?: string;
}

export function FooterButton({
  title,
  icon: Icon,
  link,
  onClick,
}: FooterButtonProps): JSX.Element {
  return typeof link === "string" && link.length > 0 ? (
    <a href="tel:+916204789892">
      <button
        onClick={onClick}
        className="hover:text-primary hover:scale-110 transition-[color,transform] font-bold text-gray-500"
      >
        <Icon className="fill-primary h-6 inline" />
        <p>{title}</p>
      </button>
    </a>
  ) : (
    <button
      onClick={onClick}
      className="hover:text-primary hover:scale-110 transition-[color,transform] font-bold text-gray-500"
    >
      <Icon className="fill-primary h-6 inline" />
      <p>{title}</p>
    </button>
  );
}
