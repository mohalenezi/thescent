import { DetailWrapper } from "../styles";
import DeleteButton from "./buttons/DeleteButton";
const PerfumeDetail = (props) => {
  return (
    <DetailWrapper>
      <img src={props.perfume.image} alt={props.perfume.name} />
      <p>{props.perfume.name}</p>
      <p>{props.perfume.description}</p>
      <p>{props.perfume.price} KD</p>
      <DeleteButton
        perfumeDelete={props.perfumeDelete}
        perfumeId={props.perfume.id}
        setPerfume={props.setPerfume}
      />
      <button onClick={() => props.setPerfume(null)}>Back</button>
    </DetailWrapper>
  );
};

export default PerfumeDetail;
