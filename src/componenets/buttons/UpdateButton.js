import { useState } from "react";
import { UpdateButtonStyled } from "../../styles";
import PerfumeModal from "../modals/PerfumeModal";

const UpdateButton = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <div>
      <UpdateButtonStyled onClick={openModal}>
        Update Perfume
      </UpdateButtonStyled>
      <PerfumeModal
        isOpen={isOpen}
        closeModal={closeModal}
        previousPerfume={props.perfume}
      />
    </div>
  );
};

export default UpdateButton;
