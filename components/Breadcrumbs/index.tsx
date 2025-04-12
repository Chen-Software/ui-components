import { Box, Flex } from "@chen/design-system/jsx";
import React, { createElement as h } from "react";

export const Breadcrumbs = ({ children, ...props }) => {
	return (
		// @ts-expect-error
		<Box as="nav" aria-label="breadcrumb" cursor="pointer">
			<Flex
				// @ts-expect-error
				as="ol"
				listStyleType="none"
				alignItems="center"
				padding={0}
				margin={0}
				whiteSpace="nowrap"
				{...props}
			>
				<Box
					// @ts-expect-error
					as="span"
					marginRight={3}
					marginBottom={1.5}
					fontSize="3xl"
				>
					☰
				</Box>

				{React.Children.map(children, (child, index) => (
					<>
						{child}
						{index !== React.Children.count(children) - 1 && (
							// @ts-expect-error
							<Box as="span" marginX={3}>
								{"➔"}
							</Box>
						)}
					</>
				))}
			</Flex>
		</Box>
	);
};
