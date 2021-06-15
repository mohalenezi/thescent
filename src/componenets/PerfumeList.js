import perfumes from "../products";
import { ListWrapper } from "../styles";
import PerfumeItem from "./PerfumeItem";
import SearchBar from "./SearchBar";
import { useState } from "react";

const PerfumeList = (props) => {
  const [querry, setQuerry] = useState("");

  const perfumesList = perfumes
    .filter((perfume) =>
      perfume.name.toLocaleLowerCase().includes(querry.toLocaleLowerCase())
    )
    .map((perfume) => (
      <PerfumeItem
        perfume={perfume}
        key={perfume.id}
        setPerfume={props.setPerfume}
        perfumeDelete={props.perfumeDelete}
      />
    ));

  return (
    <div>
      <SearchBar setQuerry={setQuerry} />
      <ListWrapper>{perfumesList}</ListWrapper>;
    </div>
  );
};

export default PerfumeList;
