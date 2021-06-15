import { DeletButtonStyled, PerfumeWrapper } from "../styles";
import DeleteButton from "./buttons/DeleteButton";

const PerfumeITem = (props) => {
  // const perfume= props.perfume
  return (
    <PerfumeWrapper onClick={() => props.setPerfume(props.perfume)}>
      <img alt={props.name} src={props.perfume.image} />
      <p>{props.perfume.name}</p>
      <p>{props.perfume.price} KD</p>
      <DeleteButton
        perfumeDelete={props.perfumeDelete}
        perfumeId={props.perfume.id}
        setPerfume={props.setPerfume}
      />
    </PerfumeWrapper>
  );
};

export default PerfumeITem;
