// import perfumes from "../products";

import { observer } from "mobx-react";

import { ListWrapper, AiFillPlusCircleStyled } from "../styles";
import PerfumeItem from "./PerfumeItem";
import PerfumeModal from "./modals/PerfumeModal";
import SearchBar from "./SearchBar";
import { useState } from "react";

const PerfumeList = ({ perfumes, shop }) => {
  const [querry, setQuerry] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const perfumesList = perfumes
    .filter((perfume) =>
      perfume.name.toLocaleLowerCase().includes(querry.toLocaleLowerCase())
    )
    .map((perfume) => <PerfumeItem perfume={perfume} key={perfume.id} />);

  return (
    <div>
      <SearchBar setQuerry={setQuerry} />
      <AiFillPlusCircleStyled size="5em" onClick={openModal} />
      <PerfumeModal isOpen={isOpen} closeModal={closeModal} shop={shop} />
      <ListWrapper>{perfumesList}</ListWrapper>;
    </div>
  );
};

export default observer(PerfumeList);
