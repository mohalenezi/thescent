import { observer } from "mobx-react";
import { useParams } from "react-router-dom";
import shopStore from "../stores/shopStore";
import { DetailWrapper } from "../styles";
import { Link } from "react-router-dom";

const ShopDetail = () => {
  const { ShopSlug } = useParams();
  const shop = shopStore.shops.find((shop) => shop.slug === shopSlug);

  return (
    <DetailWrapper>
      <h4>{shop.name}</h4>
      <Link to={`/shops/${shop.slug}`}>
        <img src={shop.image} alt={shop.name} />
      </Link>
    </DetailWrapper>
  );
};

export default observer(ShopDetail);
