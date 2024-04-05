import {
	Modal as NextUiModal,
	ModalContent,
	ModalHeader,
	ModalBody,
	Button,
	ModalFooter,
} from "@nextui-org/react";
import classNames from "classnames";
export interface ModalProps {
	open: boolean;
	onClose: () => void;
	onAccept: () => void;
	loading?: boolean;
	title?: string;
	children: React.ReactNode;
	classNamecontainer?: string;
	classNameTitle?: string;
	classNameBody?: string;
	classNameAccept?: string;
	classNameCancel?: string;
	acceptButtonText?: string;
	cancelButtonText?: string;
	actions?: boolean;
	showCancelButton?: boolean;
	showAcceptButton?: boolean;
}
export default function Modal({
	open,
	onClose,
	onAccept,
	loading = false,
	title = "Eliminar elemento",
	acceptButtonText = "Eliminar",
	cancelButtonText = "Cancelar",
	classNamecontainer,
	classNameTitle,
	children,
	classNameAccept,
	classNameCancel,
	actions = true,
	showCancelButton = true,
	showAcceptButton = true,
}: ModalProps) {
	return (
		<NextUiModal
			placement="center"
			className={classNames("bg-black", classNamecontainer)}
			isOpen={open}
			onClose={() => {
				if (!loading) {
					onClose();
				}
			}}
		>
			<ModalContent>
				<ModalHeader>
					<span className={classNames("text-white", classNameTitle)}>
						{title}
					</span>
				</ModalHeader>
				<ModalBody>{children}</ModalBody>
				<ModalFooter>
					{actions && (
						<>
							{showCancelButton && (
								<Button
									disabled={loading}
									className={classNames("text-white", classNameCancel)}
									variant="light"
									onPress={onClose}
								>
									{cancelButtonText}
								</Button>
							)}
							{showAcceptButton && (
								<Button
									className={classNames(classNameAccept)}
									isLoading={loading}
									disabled={loading}
									color="danger"
									onPress={onAccept}
								>
									{acceptButtonText}
								</Button>
							)}
						</>
					)}
				</ModalFooter>
			</ModalContent>
		</NextUiModal>
	);
}
