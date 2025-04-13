import type { ConditionalValue } from "@chen/design-system/types";
import type { PropsWithChildren } from "react";
import { type ButtonProps as BaseButtonProps } from "./button";
export interface ButtonProps extends PropsWithChildren<BaseButtonProps> {
    variant?: ConditionalValue<"link" | "outline" | "solid" | "ghost" | "subtle"> | null;
    tooltip?: string | null;
    size?: ConditionalValue<"xs" | "sm" | "md" | "lg" | "xl" | "2xl"> | null;
    children?: React.ReactNode | null;
}
export declare const Button: ({ tooltip, children, ...props }: ButtonProps) => import("react").JSX.Element;
export * from "./button";
