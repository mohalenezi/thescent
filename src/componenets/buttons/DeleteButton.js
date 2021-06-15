import { DeletButtonStyled } from "../../styles";

const DeletButton = (props) => {
  const handleDelete = () => {
    props.setPerfume(null);
  };
  return <DeletButtonStyled onClick={handleDelete}>Delete</DeletButtonStyled>;
};

export default DeletButton;
