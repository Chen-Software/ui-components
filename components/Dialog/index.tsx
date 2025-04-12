import type { UseDialogContext } from "@ark-ui/react";
import { Stack } from "@chen/design-system/jsx";
import { Button } from "../Button";
import { Dialog as DialogBase } from "./dialog";

const defaultConfirmButton = <Button>Confirm</Button>;
const defaultCancelButton = <Button variant="outline">Cancel</Button>;
const defaultCloseButton = (
	<Button aria-label="Close" variant="ghost" size="sm">
		{"×"}
	</Button>
);

export type DialogProps = DialogBase.RootProps & {
	trigger?: React.ReactNode | null;
	title?: React.ReactNode | string | null;
	description?: React.ReactNode | string | null;
	confirmButton?: React.ReactNode | null;
	cancelButton?: React.ReactNode | null;
	closeButton?: React.ReactNode | null;
	context?: (context: UseDialogContext) => React.ReactNode | null;
};

export const Dialog = ({
	trigger,
	title,
	description,
	confirmButton = defaultConfirmButton,
	cancelButton = defaultCancelButton,
	closeButton = defaultCloseButton,
	context = undefined,
	lazyMount = true,
	...props
}: DialogProps) => {
	return (
		<DialogBase.Root {...props} lazyMount>
			{trigger && <DialogBase.Trigger asChild>{trigger}</DialogBase.Trigger>}
			<DialogBase.Backdrop />
			<DialogBase.Positioner>
				<DialogBase.Content>
					<Stack gap="8" p="6">
						<Stack gap="1">
							<DialogBase.Title>{title}</DialogBase.Title>
							<DialogBase.Description>{description}</DialogBase.Description>
						</Stack>
						<Stack
							gap="3"
							direction="row"
							width="full"
							justifyContent="flex-end"
						>
							{confirmButton}
							{cancelButton && (
								<DialogBase.CloseTrigger asChild>
									{cancelButton}
								</DialogBase.CloseTrigger>
							)}
						</Stack>
					</Stack>
					{closeButton && (
						<DialogBase.CloseTrigger
							asChild
							position="absolute"
							top="2"
							right="2"
						>
							{closeButton}
						</DialogBase.CloseTrigger>
					)}
				</DialogBase.Content>
			</DialogBase.Positioner>
			{context && <DialogBase.Context>{context}</DialogBase.Context>}
		</DialogBase.Root>
	);
};

export * from "./dialog";
