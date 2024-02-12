import classNames from "classnames";
import React from "react";

enum ButtonVariants {
	outline = "outline",
	default = "default",
}

export interface ButtonProps {
	onClick?: () => void;
	variants: "outline" | "default";
	color?: "black" | "white" | "red" | "blue" | "green" | "yellow";
	size?: "string";
	children: React.ReactNode | React.ReactElement;
	href?: string;
	type?: "button" | "submit" | "reset";
	className?: string;
}

const Button: React.FC<ButtonProps> = ({
	variants = "default",
	onClick,
	children,
	type = "button",
	className,
}) => {
	let defaultClass = "";
	switch (variants) {
		case ButtonVariants.outline:
			defaultClass = `
                bg-transparent hover:bg-white hover:text-black transition-all duration-300 text-white font-semibold py-2 border border-white-500 rounded-lg px-20
            `;
			break;
		case "default":
			defaultClass =
				"bg-white text-black transition-all duration-300 hover:bg-transparent font-semibold  py-2 border border-white-500 rounded-lg hover:opacity-75 px-20 hover:text-white";
			break;
		default:
			defaultClass =
				"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded";
	}

	return (
		<button
			type={type}
			className={classNames(defaultClass, className)}
			onClick={onClick}
		>
			{children}
		</button>
	);
};

export default Button;
