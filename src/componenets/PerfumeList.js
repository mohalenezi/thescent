import perfumes from "../products";
import PerfumeItem from "./PerfumeItem"

const PerfumeList = () => {
    const perfumesList = perfumes.map((perfume) => (
    <PerfumeItem 
    perfume={perfume}
    key={perfume.id}
    />
    ));
    console.log(perfumesList)
    return <div className="list">{perfumesList}</div>
};

export default PerfumeList