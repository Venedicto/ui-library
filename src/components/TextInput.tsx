import { Input } from "@nextui-org/react";

export interface TextInputProps
	extends React.InputHTMLAttributes<HTMLInputElement> {
	value?: string | undefined;
	// biome-ignore lint/suspicious/noExplicitAny: <explanation>
	register?: any;
	isValid?: boolean;
	errorMessage?: string;
	label?: string;
}

export default function TextInput({
	register,
	errorMessage,
	isValid = true,

	...props
}: TextInputProps) {
	return (
		<div className="py-10  w-screen px-10 lg:px-80">
			<Input
				isInvalid={!isValid}
				errorMessage={!isValid && errorMessage}
				label={props.label}
				name={props.name}
				type={props.type}
				placeholder={props.placeholder}
				onChange={props.onChange}
				value={props.value && props.value}
				{...register}
			/>
		</div>
	);
}
