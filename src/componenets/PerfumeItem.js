import { DeletButtonStyled, PerfumeWrapper } from "../styles";
import DeleteButton from "./buttons/DeleteButton";

const PerfumeItem = (props) => {
  // const perfume= props.perfume
  return (
    <div>
      <PerfumeWrapper onClick={() => props.setPerfume(props.perfume)}>
        <img alt={props.name} src={props.perfume.image} />
        <p>{props.perfume.name}</p>
        <p>{props.perfume.price} KD</p>
      </PerfumeWrapper>
      <DeleteButton
        perfumeDelete={props.perfumeDelete}
        perfumeId={props.perfume.id}
        setPerfume={props.setPerfume}
      />
    </div>
  );
};

export default PerfumeItem;
