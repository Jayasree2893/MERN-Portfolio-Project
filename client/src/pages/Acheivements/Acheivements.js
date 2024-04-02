import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Flip } from "react-reveal";

import image1 from "../../assets/award1.jpeg";
import image2 from "../../assets/award2.jpeg";
import image3 from "../../assets/award3.jpeg";
import "./acheivements.css";

const Modal = ({ isOpen, onClose, image }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1,
          }}
          onClick={onClose}
        >
          <motion.img
            src={image}
            alt="Image"
            style={{
              maxWidth: "80%",
              maxHeight: "80%",
              objectFit: "contain",
            }}
            onClick={(e) => e.stopPropagation()}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const Acheivements = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleCardClick = (image) => {
    setSelectedImage(image);
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
    setSelectedImage(null);
  };

  return (
    <>
      <div className="acheivements text-center" id="achievements">
        <div className="acheivements-heading ">
          <Flip right>
            <h1>Acheivements</h1>
          </Flip>
          <hr />
        </div>
        <div className="acheivements-body">
          {isOpen && (
            <Modal
              isOpen={isOpen}
              onClose={handleCloseModal}
              image={selectedImage}
            />
          )}
          <div style={{ display: "flex", flexWrap: "wrap" }}>
            <Flip right>
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0 }}
                transition={{ duration: 0.5 }}
                style={{
                  width: 350,
                  height: 400,
                  backgroundColor: "lightblue",
                  borderRadius: 10,
                  boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  color: "white",
                  fontWeight: "bold",
                  fontSize: 24,
                  margin: 20,
                  cursor: "pointer",
                  backgroundImage: `url(${image1})`,
                  backgroundSize: "cover",
                }}
                onClick={() => handleCardClick(image1)}
              />
            </Flip>
            <Flip right>
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0 }}
                transition={{ duration: 0.5 }}
                style={{
                  width: 350,
                  height: 400,
                  backgroundColor: "lightgreen",
                  borderRadius: 10,
                  boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  color: "white",
                  fontWeight: "bold",
                  fontSize: 24,
                  margin: 20,
                  cursor: "pointer",
                  backgroundImage: `url(${image2})`,
                  backgroundSize: "cover",
                }}
                onClick={() => handleCardClick(image2)}
              />
            </Flip>
            <Flip right>
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0 }}
                transition={{ duration: 0.5 }}
                style={{
                  width: 350,
                  height: 400,
                  backgroundColor: "lightgreen",
                  borderRadius: 10,
                  boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  color: "white",
                  fontWeight: "bold",
                  fontSize: 24,
                  margin: 20,
                  cursor: "pointer",
                  backgroundImage: `url(${image3})`,
                  backgroundSize: "cover",
                }}
                onClick={() => handleCardClick(image3)}
              />
            </Flip>
          </div>
        </div>
      </div>
    </>
  );
};

export default Acheivements;