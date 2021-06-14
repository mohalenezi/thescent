import { PerfumeWrapper } from "../styles";
const PerfumeITem = (props) => {
  // const perfume= props.perfume
  return (
    <PerfumeWrapper onClick={() => props.setPerfume(props.perfume)}>
      <img alt={props.name} src={props.perfume.image} />
      <p>{props.perfume.name}</p>
      <p>{props.perfume.price} KD</p>
    </PerfumeWrapper>
  );
};

export default PerfumeITem;
