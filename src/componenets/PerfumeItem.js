import { DeletButtonStyled, PerfumeWrapper } from "../styles";
import DeleteButton from "./buttons/DeleteButton";
import { Link } from "react-router-dom";

const PerfumeItem = (props) => {
  // const perfume= props.perfume
  return (
    <div>
      <PerfumeWrapper>
        <Link to={`/perfumes/${props.perfume.slug}`}>
          <img alt={props.perfume.name} src={props.perfume.image} />
        </Link>
        <p>{props.perfume.name}</p>
        <p>{props.perfume.price} KD</p>

        <DeleteButton
          perfumeDelete={props.perfumeDelete}
          perfumId={props.perfume.id}
        />
      </PerfumeWrapper>
    </div>
  );
};

export default PerfumeItem;
