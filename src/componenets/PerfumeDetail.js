import { DetailWrapper } from "../styles";
import DeleteButton from "./buttons/DeleteButton";
const PerfumeDetail = (props) => {
  return (
    <div>
      <DetailWrapper>
        <img src={props.perfume.image} alt={props.perfume.name} />
        <p>{props.perfume.name}</p>
        <p>{props.perfume.description}</p>
        <p>{props.perfume.price} KD</p>
        <button onClick={() => props.setPerfume(null)}>Back</button>
      </DetailWrapper>
      <DeleteButton
        perfumeDelete={props.perfumeDelete}
        perfumeId={props.perfume.id}
        setPerfume={props.setPerfume}
      />
    </div>
  );
};

export default PerfumeDetail;
