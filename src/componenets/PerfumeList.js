// import perfumes from "../products";
import perfumeStore from "../stores/perfumeStore";
import { observer } from "mobx-react";

import { ListWrapper } from "../styles";
import PerfumeItem from "./PerfumeItem";
import SearchBar from "./SearchBar";
import { useState } from "react";

const PerfumeList = () => {
  const [querry, setQuerry] = useState("");

  const perfumesList = perfumeStore.perfumes
    .filter((perfume) =>
      perfume.name.toLocaleLowerCase().includes(querry.toLocaleLowerCase())
    )
    .map((perfume) => <PerfumeItem perfume={perfume} key={perfume.id} />);

  return (
    <div>
      <SearchBar setQuerry={setQuerry} />
      <ListWrapper>{perfumesList}</ListWrapper>;
    </div>
  );
};

export default observer(PerfumeList);
