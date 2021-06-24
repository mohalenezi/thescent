import Modal from "react-modal";
import { useState } from "react";

import { CreateButtonStyled } from "../../styles";
import perfumeStore from "../../stores/perfumeStore";

const PerfumeModal = (props) => {
  const [perfume, setPerfume] = useState({
    name: "",
    description: "",
    price: 0,
    image: "",
  });

  const handleChange = (event) => {
    setPerfume({ ...perfume, [event.target.name]: event.target.value });
    console.log(perfume);
  };

  // to submit new perfume then close

  const handleSubmit = (event) => {
    event.preventDefault();
    perfumeStore.perfumeCreate(perfume);
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
              />
            </div>
            <div className="form-group">
              <label>Description</label>
              <input
                className="form-control"
                type="text"
                onChange={handleChange}
                name="description"
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
              />
            </div>
          </div>
          <div className="form-group">
            <label>Image</label>
            <input
              className="form-control"
              type="text"
              onChange={handleChange}
              name="image"
            />
          </div>
          <CreateButtonStyled>Add perfume</CreateButtonStyled>
        </form>
      </Modal>
    </div>
  );
};

export default PerfumeModal;
