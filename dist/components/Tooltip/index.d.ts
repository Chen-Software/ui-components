import { Tooltip as TooltipBase } from "./tooltip";
export type TooltipProps = TooltipBase.RootProps & {
    trigger?: React.ReactNode | null;
    content?: string | React.ReactNode | null;
};
export declare const Tooltip: ({ content, ...props }: TooltipProps) => import("react").JSX.Element;
export * from "./tooltip";
