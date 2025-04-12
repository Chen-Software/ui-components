import type { ConditionalValue } from "@chen/design-system/types";
import type { PropsWithChildren } from "react";
import { Tooltip } from "../Tooltip";
import {
	type ButtonProps as BaseButtonProps,
	Button as ButtonBase,
} from "./button";

export interface ButtonProps extends PropsWithChildren<BaseButtonProps> {
	variant?: ConditionalValue<
		"link" | "outline" | "solid" | "ghost" | "subtle"
	> | null;
	tooltip?: string;
	children?: React.ReactNode | null;
}

export const Button = ({ tooltip, children, ...props }: ButtonProps) => {
	if (tooltip) {
		return (
			<Tooltip
				trigger={<ButtonBase {...props}>{children}</ButtonBase>}
				content={tooltip}
			/>
		);
	}

	return <ButtonBase {...props}>{children}</ButtonBase>;
};

export * from "./button";
