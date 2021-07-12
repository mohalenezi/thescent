import { useState } from "react";
import { observer } from "mobx-react";
import shopStore from "../stores/shopStore";

import ShopItem from "./ShopItem";
import SearchBar from "./SearchBar";
import ShopModal from "./modals/ShopModal";
import { Title, ListWrapper, AiFillPlusCircleStyled } from "../styles";

const ShopList = () => {
  const [querry, setQuerry] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const shops = shopStore.shops
    .filter((shop) => shop.name.toLowerCase().includes(querry.toLowerCase()))
    .map((shop) => <ShopItem shop={shop} />);

  return (
    <div className="container">
      <Title>Shops</Title>
      <SearchBar setQuerry={setQuerry} />
      <AiFillPlusCircleStyled size="5em" onClick={openModal} />
      <ShopModal isOpen={isOpen} closeModal={closeModal} />
      <ListWrapper>{shops}</ListWrapper>;
    </div>
  );
};

export default observer(ShopList);
