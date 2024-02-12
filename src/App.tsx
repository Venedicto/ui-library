import { NextUIProvider } from "@nextui-org/react";
import React from "react";

import Modal from "./components/Modal";
import useModal from "./hooks/useModal";
import Button from "./components/Button";

export default function App() {
	const modal = useModal();

	return (
		<NextUIProvider>
			<div className="bg-black h-screen">
				<Modal
					open={modal.isOpen}
					onClose={modal.close}
					onAccept={() => console.log("accept")}
				>
					<div className="h-96">
						<h1 className="text-white">Hello World</h1>
						<p className="text-white">
							Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi
							officiis laudantium quas fugiat minima vitae repellendus maxime
							quaerat eveniet incidunt iure illo, rerum nostrum libero, a
							deserunt? Eum, aliquam nulla?
						</p>
					</div>
				</Modal>

				<Button variants="default" onClick={modal.open}>
					Click Open modal
				</Button>
			</div>
		</NextUIProvider>
	);
}
