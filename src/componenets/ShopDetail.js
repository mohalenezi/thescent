import { useParams } from "react-router-dom";
import shopStore from "../stores/shopStore";
import { DetailWrapper } from "../styles";
import PerfumeList from "./PerfumeList";
import perfumeStore from "../stores/perfumeStore";
import { observer } from "mobx-react";

const ShopDetail = () => {
  const { shopSlug } = useParams();
  console.log(shopSlug);
  const shop = shopStore.shops.find((shop) => shop.slug === shopSlug);
  const perfumes = shop.perfumes.map((perfume) =>
    perfumeStore.getPerfumeById(perfume.id)
  );

  return (
    <>
      <DetailWrapper>
        <h4>{shop.name}</h4>
        <img src={shop.image} alt={shop.name} />
      </DetailWrapper>
      <PerfumeList perfumes={perfumes} shop={shop} />
    </>
  );
};

export default observer(ShopDetail);
