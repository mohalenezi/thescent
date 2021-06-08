
const PerfumeITem = (props) => {
    // const perfume= props.perfume
    return (
    <div className="perfume">
    <img alt={props.name} className="perfume-image" src= {props.perfume.Image} />
    <p className="App">{props.perfume.name}</p>
    <p className="App">{props.perfume.Price} KD</p>
    </div>
  );
    };


    export default PerfumeITem;
