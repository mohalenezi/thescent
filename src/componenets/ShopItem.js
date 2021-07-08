import { observer } from "mobx-react";
import { ShopItemImage } from "../styles";
import { Link } from "react-router-dom";

const ShopItem = ({ shop }) => {
  return;
  <>
    <PerfumeWrapper>
      <Link to={`/perfumes/${props.perfume.slug}`}>
        <img alt={props.perfume.name} src={props.perfume.image} />
      </Link>
      <p>{shop.name}</p>
      <ShopItemImage src={shop.image} alt={shop.name} />
    </PerfumeWrapper>
  </>;
};

export default observer(ShopItem);
