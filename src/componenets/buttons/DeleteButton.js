import perfumeStore from "../../stores/perfumeStore";
import { DeletButtonStyled } from "../../styles";

const DeletButton = (props) => {
  const handleDelete = () => {
    perfumeStore.perfumeDelete(props.perfumeId);
  };
  return <DeletButtonStyled onClick={handleDelete}>Delete</DeletButtonStyled>;
};

export default DeletButton;
