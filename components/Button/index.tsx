import type { PropsWithChildren } from "react";
import { Tooltip } from "../Tooltip";
import {
	type ButtonProps as BaseButtonProps,
	Button as ButtonBase,
} from "./button";

interface ButtonProps extends PropsWithChildren<BaseButtonProps> {
	tooltip?: string;
}

export const Button = ({ tooltip, children, ...props }: ButtonProps) => {
	if (tooltip) {
		return (
			<Tooltip
				// @ts-expect-error
				trigger={<ButtonBase {...props}>{children}</ButtonBase>}
				content={tooltip}
			/>
		);
	}

	return <ButtonBase {...props}>{children}</ButtonBase>;
};

export * from "./button";
