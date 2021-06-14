import { DetailWrapper } from "../styles";

const PerfumeDetail = (props) => {
  return (
    <DetailWrapper>
      <img src={props.perfume.image} alt={props.perfume.name} />
      <p>{props.perfume.name}</p>
      <p>{props.perfume.description}</p>
      <p>{props.perfume.price} KD</p>
    </DetailWrapper>
  );
};

export default PerfumeDetail;
