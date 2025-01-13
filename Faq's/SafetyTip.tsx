import * as React from "react";
import { SafetyTipProps } from "./types";

export const SafetyTip: React.FC<SafetyTipProps> = ({ text }) => (
  <div className="z-10 self-center" role="article">
    {text}
    <br />
  </div>
);
