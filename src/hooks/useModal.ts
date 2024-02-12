import React from "react";

export default function useModal() {
	const [isOpen, setIsOpen] = React.useState(false);
	const [loading, setLoading] = React.useState(false);

	const open = () => setIsOpen(true);
	const close = () => {
		setIsOpen(false);
		setLoading(false);
	};

	return {
		isOpen,
		open,
		close,
		loading,
		setLoading,
	};
}
