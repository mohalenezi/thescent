import { observer } from "mobx-react";
import { ShopItemImage, PerfumeWrapper } from "../styles";
import { Link } from "react-router-dom";

const ShopItem = ({ shop }) => {
  console.log(shop.slug);
  return (
    <>
      <PerfumeWrapper>
        <Link to={`/shops/${shop.slug}`}>
          <img alt={shop.name} src={shop.image} />
        </Link>
        <p>{shop.name}</p>
      </PerfumeWrapper>
    </>
  );
};

export default observer(ShopItem);
