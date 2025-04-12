import { Dialog as DialogBase } from "./dialog";
export type DialogProps = DialogBase.RootProps & {
    trigger?: React.ReactNode | null;
    title?: React.ReactNode | string | null;
    description?: React.ReactNode | string | null;
    confirmButton?: React.ReactNode | null;
    cancelButton?: React.ReactNode | null;
    closeButton?: React.ReactNode | null;
    context?: ((context: unknown) => React.ReactNode) | null;
};
export declare const Dialog: ({ trigger, title, description, confirmButton, cancelButton, closeButton, context, lazyMount, ...props }: DialogProps) => import("react").JSX.Element;
export * from "./dialog";
