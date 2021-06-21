import { DetailWrapper } from "../styles";
import DeleteButton from "./buttons/DeleteButton";

import { useParams, Redirect } from "react-router-dom";

const PerfumeDetail = (props) => {
  const perfumeId = useParams().perfumeId;
  const perfume = props.perfumes.find((perfume) => perfume.id === +perfumeId);

  if (!perfume) return <Redirect to="/perfumes" />;
  return (
    <div>
      <DetailWrapper>
        <img src={perfume.image} alt={perfume.name} />
        <p>{perfume.name}</p>
        <p>{perfume.description}</p>
        <p>{perfume.price} KD</p>

        <DeleteButton
          perfumeDelete={props.perfumeDelete}
          perfumeId={perfume.id}
        />
        <button>Back</button>
      </DetailWrapper>
    </div>
  );
};

export default PerfumeDetail;
