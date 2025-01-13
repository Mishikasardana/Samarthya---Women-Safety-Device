import * as React from "react";
import { NavigationIcon } from "./NavigationIcon";
import { NavigationItem } from "./types";

const navigationItems: NavigationItem[] = [
  {
    src: "https://cdn.builder.io/api/v1/image/assets/TEMP/5b580c35109d3d324d386a3455088bc5493f64e94f39fa3d3d9853856dd45391?placeholderIfAbsent=true&apiKey=7f447f3e4453447a8e7532de9b4247c3",
    size: "45px",
    alt: "Navigation item 1",
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets/TEMP/9ef475eb364867661925acfcdb2b1ee587ded652817318b6892584f37acaca13?placeholderIfAbsent=true&apiKey=7f447f3e4453447a8e7532de9b4247c3",
    size: "45px",
    alt: "Navigation item 2",
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets/TEMP/709cb0502e9877bc2f9c3028ca8f085e182e3bcdf005827c783fc6390c731acf?placeholderIfAbsent=true&apiKey=7f447f3e4453447a8e7532de9b4247c3",
    size: "50px",
    alt: "Navigation item 3",
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets/TEMP/39896949ee63bbecb0072d74c72814787a9f00afeebbee156f1843630c3e4e87?placeholderIfAbsent=true&apiKey=7f447f3e4453447a8e7532de9b4247c3",
    size: "45px",
    alt: "Navigation item 4",
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets/TEMP/bc47bb0aecad0d1e770a396ca1bdc369970bed798b00717d2e242a6fba645c84?placeholderIfAbsent=true&apiKey=7f447f3e4453447a8e7532de9b4247c3",
    size: "45px",
    alt: "Navigation item 5",
  },
];

export const NavigationBar: React.FC = () => {
  return (
    <div className="flex flex-col max-w-[411px]">
      <nav className="flex gap-5 justify-between items-start px-5 py-5 bg-rose-400" role="navigation" aria-label="Main navigation">
        {navigationItems.map((item, index) => (
          <NavigationIcon
            key={index}
            src={item.src}
            size={item.size}
            alt={item.alt}
          />
        ))}
      </nav>
    </div>
  );
};
