import { DeletButtonStyled } from "../../styles";

const DeletButton = (props) => {
  const handleDelete = () => {
    props.perfumeDelete(props.perfumeId);
  };
  return <DeletButtonStyled onClick={handleDelete}>Delete</DeletButtonStyled>;
};

export default DeletButton;
