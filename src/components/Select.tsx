import { SelectItem, Select as S } from "@nextui-org/react";
import React from "react";

export interface SelectProps {
	size?: "sm" | "md" | "lg" | undefined;
	name?: string;
	className?: string;
	label: string;
	options: { value: string; label: string }[];
	isValid?: boolean;
	errorMessage?: string;
	// biome-ignore lint/suspicious/noExplicitAny: <explanation>
	register?: any;
	isLoading?: boolean;
	textAlign?: "center" | "left";
	onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
	placeholder: string;
}
export default function Select({
	className,
	textAlign = "center",
	placeholder,
	options,
	isLoading,
	isValid = true,
	onChange,
	errorMessage,
	size = "sm",
	register,
	name,
}: SelectProps) {
	return (
		<S
			name={name}
			size={size}
			isLoading={isLoading}
			variant="faded"
			radius="lg"
			classNames={{
				value: `text-${textAlign}`,
			}}
			className={className}
			onChange={onChange}
			errorMessage={!isValid && errorMessage}
			isInvalid={!isValid}
			placeholder={placeholder}
			{...register}
		>
			{options.map((option) => (
				<SelectItem key={option.value} value={option.value}>
					{option.label}
				</SelectItem>
			))}
		</S>
	);
}
