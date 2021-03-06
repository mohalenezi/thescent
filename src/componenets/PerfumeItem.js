import { PerfumeWrapper } from "../styles";
import UpdateButton from "./buttons/UpdateButton";
import DeleteButton from "./buttons/DeleteButton";
import { Link } from "react-router-dom";
import { observer } from "mobx-react";

//stores
import authStore from "../stores/authStore";

const PerfumeItem = (props) => {
  return (
    <div>
      <PerfumeWrapper>
        <Link to={`/perfumes/${props.perfume.slug}`}>
          <img alt={props.perfume.name} src={props.perfume.image} />
        </Link>
        <p>{props.perfume.name}</p>
        <p>{props.perfume.price} KD</p>
        {authStore.user && (
          <>
            <UpdateButton perfume={props.perfume} />
            <DeleteButton perfumeId={props.perfume.id} />
          </>
        )}
      </PerfumeWrapper>
    </div>
  );
};

export default observer(PerfumeItem);
