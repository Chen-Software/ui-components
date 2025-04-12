import { Tooltip as TooltipBase } from "./tooltip";

export type TooltipProps = TooltipBase.RootProps & {
	trigger?: React.ReactNode | null;
	content?: string | React.ReactNode | null;
};

export const Tooltip = ({ content, ...props }: TooltipProps) => (
	<TooltipBase.Root {...props}>
		<TooltipBase.Trigger>{props.trigger}</TooltipBase.Trigger>
		<TooltipBase.Positioner>
			<TooltipBase.Arrow>
				<TooltipBase.ArrowTip />
			</TooltipBase.Arrow>
			<TooltipBase.Content>{content}</TooltipBase.Content>
		</TooltipBase.Positioner>
	</TooltipBase.Root>
);

export * from "./tooltip";
