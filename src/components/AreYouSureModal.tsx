import {
	Modal,
	ModalContent,
	ModalHeader,
	ModalBody,
	Button,
	ModalFooter,
} from "@nextui-org/react";
import classNames from "classnames";

export interface AreYouSureModalProps {
	open: boolean;
	onClose: () => void;
	onAccept: () => void;
	loading: boolean;
	title?: string;
	body?: string;
	classNamecontainer?: string;
	classNameTitle?: string;
	classNameBody?: string;
	classNameAccept?: string;
	classNameCancel?: string;
	acceptButtonText?: string;
	cancelButtonText?: string;
}
export default function AreYouSureModal({
	open,
	onClose,
	onAccept,
	loading,
	title = "Eliminar elemento",
	body = "Esta acción no se puede deshacer, ¿Estás seguro que quieres eliminar este elemento?",
	acceptButtonText = "Eliminar",
	cancelButtonText = "Cancelar",
	classNamecontainer,
	classNameTitle,
	classNameBody,
	classNameAccept,
	classNameCancel,
}: AreYouSureModalProps) {
	return (
		<Modal
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
				<ModalBody>
					<p className={classNames("text-white", classNameBody)}>{body}</p>
				</ModalBody>
				<ModalFooter>
					<Button
						disabled={loading}
						className={classNames("text-white", classNameCancel)}
						variant="light"
						onPress={onClose}
					>
						{cancelButtonText}
					</Button>
					<Button
						className={classNames(classNameAccept)}
						isLoading={loading}
						disabled={loading}
						color="danger"
						onPress={onAccept}
					>
						{acceptButtonText}
					</Button>
				</ModalFooter>
			</ModalContent>
		</Modal>
	);
}
