import Modal from "react-modal";
import { useState } from "react";

import { CreateButtonStyled } from "../../styles";
import perfumeStore from "../../stores/perfumeStore";

const PerfumeModal = (props) => {
  const [perfume, setPerfume] = useState(
    props.previousPerfume
      ? props.previousPerfume
      : {
          name: "",
          description: "",
          price: 0,
          image: "",
        }
  );

  const handleChange = (event) => {
    setPerfume({ ...perfume, [event.target.name]: event.target.value });
    console.log(perfume);
  };

  const handleImage = (event) => {
    setPerfume({ ...perfume, image: event.target.files[0] });
  };

  // to submit new perfume then close

  const handleSubmit = (event) => {
    event.preventDefault();
    if (props.previousPerfume) perfumeStore.perfumeUpdate(perfume);
    else perfumeStore.perfumeCreate(perfume, props.shop);
    props.closeModal();
  };

  return (
    <div>
      <Modal
        isOpen={props.isOpen}
        onRequestClose={props.closeModal}
        contentLabel="perfume Modal"
      >
        <form onSubmit={handleSubmit}>
          <div className="form-group row">
            <div className="col-6">
              <label>Name</label>
              <input
                className="form-control"
                type="text"
                onChange={handleChange}
                name="name"
                value={perfume.name}
              />
            </div>
            <div className="form-group">
              <label>Description</label>
              <input
                className="form-control"
                type="text"
                onChange={handleChange}
                name="description"
                value={perfume.description}
              />
            </div>
            <div className="col-6">
              <label>Price</label>
              <input
                className="form-control"
                type="number"
                min="1"
                onChange={handleChange}
                name="price"
                value={perfume.price}
              />
            </div>
          </div>
          <div className="form-group">
            <label>Image</label>
            <input
              className="form-control"
              type="file"
              onChange={handleImage}
              name="image"
            />
          </div>
          <CreateButtonStyled>
            {props.previousPerfume ? "update" : "Add"} perfume
          </CreateButtonStyled>
        </form>
      </Modal>
    </div>
  );
};

export default PerfumeModal;
