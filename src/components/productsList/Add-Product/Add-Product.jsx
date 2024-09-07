import React, { useState } from "react";

import "../../../styles/components/productList/Add-Product/Add-Product.scss";

import { Button, Modal } from "antd";

const AddProduct = ({ addNewProduct }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => setIsModalOpen(true);

  const addProduct = (data) => {
    const file = data.img;
    const reader = new FileReader();
    reader.onload = () => {
      const imageData = reader.result;
      console.log(reader);

      const newProduct = {
        id: Math.random(),
        image: imageData, // base64-encoded image data
        info: data.info,
        expire: data.expires,
        price: data.price,
        more: {
          processor: data.processor,
          ram: data.ram.value,
          storage: data.storage,
          display: data.display,
        },
      };
      addNewProduct({ ...newProduct });
      console.log({ ...newProduct });
    };
    reader.readAsDataURL(file);
  };

  // const handleOk = () => {
  //   setIsModalOpen(false);
  // };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Button type="primary" onClick={showModal}>
        Add product
      </Button>
      <Modal
        title="Add Product Form"
        open={isModalOpen}
        onCancel={handleCancel}
        footer={(_, { CancelBtn }) => (
          <>
            <CancelBtn />
            <Button type="submit">Custom Button</Button>
          </>
        )}
      >
        <form
          onSubmit={(e) => {
            e.preventDefault();
            const formData = new FormData(e.target);
            const data = Object.fromEntries(formData.entries());
            addProduct(data);
          }}
        >
          <fieldset>
            <label htmlFor="img">Upload image:</label>
            <input id="img" name="img" type="file" accept="image/*" required />
          </fieldset>
          <hr />

          <fieldset>
            <label htmlFor="info">Enter info about product:</label>
            <input id="info" name="info" type="text" required />
          </fieldset>
          <hr />

          <fieldset style={{ display: "flex" }}>
            <label style={{ width: "auto", margin: "0" }}>Expires:</label>

            <div className="product-expiration">
              <input id="expires-true" name="expires" type="radio" />
              <label htmlFor="expires">Yes</label>

              <input
                id="expires-false"
                name="expires"
                type="radio"
                defaultChecked
              />
              <label htmlFor="expires">No</label>
            </div>
          </fieldset>
          <hr />

          {/* Price */}
          <fieldset>
            <label htmlFor="price">Price:</label>
            <input id="price" name="price" type="text" required />
          </fieldset>
          <hr />

          {/* Processor */}
          <fieldset>
            <label htmlFor="processor">Processor:</label>
            <input id="product-processor" name="processor" type="text" />
          </fieldset>
          <hr />

          {/* RAM */}
          <fieldset>
            <label htmlFor="ram">RAM:</label>
            <input id="product-ram" name="ram" type="text" />
          </fieldset>
          <hr />

          {/* Storage */}
          <fieldset>
            <label htmlFor="storage">Storage:</label>
            <input id="product-storage" name="storage" type="text" />
          </fieldset>
          <hr />

          {/* Display */}
          <fieldset>
            <label htmlFor="display">Display:</label>
            <input id="product-display" name="display" type="text" />
          </fieldset>
          <hr />

          <Button type="submit">Add Product</Button>
        </form>
      </Modal>
    </>
  );
};

export default AddProduct;
