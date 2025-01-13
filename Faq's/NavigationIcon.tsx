import * as React from "react";
import { IconProps } from "./types";

export const NavigationIcon: React.FC<IconProps> = ({ src, size, alt }) => {
  return (
    <img
      loading="lazy"
      src={src}
      alt={alt}
      className={`object-contain shrink-0 aspect-square w-[${size}]`}
    />
  );
};
