import Modal from "react-responsive-modal";
import { PokeForm } from "../../components";

export const PokeModal = (
  { isOpen, onCloseModal}
  :
  { isOpen: boolean, onCloseModal: Function}
) => {
  return (
    <Modal open={isOpen} onClose={() => onCloseModal()} center>
      <PokeForm />
    </Modal>
  );
};