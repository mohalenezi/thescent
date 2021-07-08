import { useState } from "react";
import shopStore from "../stores/shopStore";
import { observer } from "mobx-react";

import ShopItem from "./ShopItem";
import ShopModal from "./modals/ShopModal";
import SearchBar from "./SearchBar";
import { Title, ListWrapper, AiFillPlusCircleStyled } from "../styles";

const ShopList = () => {
  const [querry, setQuerry] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const shopList = shopStore.shops
    .filter((shop) => shop.name.toLowerCase().includes(querry.toLowerCase()))
    .map((shop) => <ShopItem shop={shop} />);

  return (
    <div className="container">
      <Title>Shops</Title>
      <SearchBar setQuerry={setQuerry} />
      <AiFillPlusCircleStyled size="5em" onClick={openModal} />
      <ShopModal isOpen={isOpen} closeModal={closeModal} />
      <ListWrapper>{shopList}</ListWrapper>;
    </div>
  );
};

export default observer(ShopList);
