import { Drawer as DrawerBase } from "./drawer";
export type DrawerProps = DrawerBase.RootProps & {
    trigger?: React.ReactNode | null;
    title?: string | React.ReactNode | null;
    description?: string | React.ReactNode | null;
    content?: string | React.ReactNode | null;
    footer?: boolean | React.ReactNode | null;
    footerCancelButton?: React.ReactNode | null;
    closeTrigger?: React.ReactNode | null;
};
export declare const Drawer: ({ trigger, title, description, content, footer, footerCancelButton, closeTrigger, ...props }: DrawerProps) => import("react").JSX.Element;
export * from "./drawer";
