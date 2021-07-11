import { useParams } from "react-router-dom";
import shopStore from "../stores/shopStore";
import { DetailWrapper } from "../styles";
import { observer } from "mobx-react";

const ShopDetail = () => {
  const { shopSlug } = useParams();
  console.log(shopSlug);
  const shop = shopStore.shops.find((shop) => shop.slug === shopSlug);

  return (
    <DetailWrapper>
      <h4>{shop.name}</h4>
      <img src={shop.image} alt={shop.name} />
    </DetailWrapper>
  );
};

export default observer(ShopDetail);
