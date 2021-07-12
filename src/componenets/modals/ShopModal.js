import Modal from "react-modal";
import { useState } from "react";

import { CreateButtonStyled } from "../../styles";
import shopStore from "../../stores/shopStore";

const ShopModal = (props) => {
  const [shop, setShop] = useState({
    name: "",
    image: "",
  });

  const handleChange = (event) => {
    setShop({ ...shop, [event.target.name]: event.target.value });
  };

  const handleImage = (event) => {
    setShop({ ...shop, image: event.target.files[0] });
  };

  // to submit new perfume then close

  const handleSubmit = (event) => {
    event.preventDefault();
    shopStore.shopCreate(shop);
    props.closeModal();
  };

  return (
    <div>
      <Modal
        isOpen={props.isOpen}
        onRequestClose={props.closeModal}
        contentLabel="Shop Modal"
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
                value={shop.name}
              />
            </div>
            <div className="col-6">
              <label>Image</label>
              <input
                className="form-control"
                type="file"
                onChange={handleImage}
                name="image"
              />
            </div>
          </div>

          <CreateButtonStyled>"Add shop</CreateButtonStyled>
        </form>
      </Modal>
    </div>
  );
};

export default ShopModal;
