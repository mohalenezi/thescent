import { DetailWrapper } from "../styles";
import DeleteButton from "./buttons/DeleteButton";

import { useParams, Redirect } from "react-router-dom";
import { Link } from "react-router-dom";
const PerfumeDetail = (props) => {
  const perfumeSlug = useParams().perfumeSlug;
  const perfume = props.perfumes.find(
    (perfume) => perfume.slug === perfumeSlug
  );

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
        <Link to="/perfumes">
          <button>back</button>
        </Link>
      </DetailWrapper>
    </div>
  );
};

export default PerfumeDetail;
