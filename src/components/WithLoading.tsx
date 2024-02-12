import { ImCross } from "react-icons/im";
import { Spinner } from "@nextui-org/react";
import React from "react";

export interface WithLoadingProps {
	isLoading: boolean;
	isError: boolean;
	children: React.ReactNode;
	colorLoading?:
		| "primary"
		| "secondary"
		| "success"
		| "warning"
		| "white"
		| "default"
		| "current"
		| "danger"
		| undefined;
	sizeLoading?: string;
	textErrorColor?: string;
}
export default function WithLoading({
	isLoading,
	isError,
	children,
	textErrorColor,
	colorLoading,
}: WithLoadingProps) {
	if (isLoading)
		return (
			<div className="w-full mx-auto flex justify-center items-center gap-2">
				<Spinner color={colorLoading ? colorLoading : "default"} />
			</div>
		);
	if (!isLoading && !isError) return <>{children}</>;

	return (
		<div className="w-full mx-auto flex justify-center items-center gap-2">
			<ImCross color="red" />
			<p
				style={{
					color: textErrorColor,
				}}
			>
				Hubo un error en la peticion
			</p>
		</div>
	);
}
