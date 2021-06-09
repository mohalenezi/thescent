import perfumes from "../products";
import { ListWrapper } from "../styles";
import PerfumeItem from "./PerfumeItem";

const PerfumeList = () => {
  const perfumesList = perfumes.map((perfume) => (
    <PerfumeItem perfume={perfume} key={perfume.id} />
  ));
  console.log(perfumesList);
  return <ListWrapper>{perfumesList}</ListWrapper>;
};

export default PerfumeList;
