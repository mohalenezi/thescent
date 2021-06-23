import { observer } from "mobx-react";

//style
import { DetailWrapper } from "../styles";
//components
import DeleteButton from "./buttons/DeleteButton";

//router class
import { useParams, Redirect } from "react-router-dom";
import { Link } from "react-router-dom";
import perfumeStore from "../stores/perfumeStore";

const PerfumeDetail = () => {
  const perfumeSlug = useParams().perfumeSlug;
  const perfume = perfumeStore.perfumes.find(
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

        <DeleteButton perfumeId={perfume.id} />
        <Link to="/perfumes">
          <button>back</button>
        </Link>
      </DetailWrapper>
    </div>
  );
};

export default observer(PerfumeDetail);
