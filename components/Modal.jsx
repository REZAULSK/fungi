import React, { useEffect } from 'react';
import Modal from 'react-modal';
import { PortfolioModal } from './PortfolioModal';
import { BlogModal } from './BlogModal';
import { FiX } from "react-icons/fi";

const MainModal = ({ isOpen, onRequestClose, product, commonModal, modalButtonColor }) => {
  const customStyles = {
    content: {
      inset: "40px",
      maxwidth: '1140px',
      padding: "0px",
      maxWidth: "1140px",
      margin: '0 auto',
    },
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      Modal.setAppElement('#__next'); // For Next.js, this should be #__next
    }
  }, []);

  // Return null if no product is provided to avoid rendering
  if (!product) return null;

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Product Details"
      style={customStyles}
      overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
    >
      {commonModal === "portfolioModal" ? <PortfolioModal product={product} /> : <BlogModal product={product} />}
      <button
        onClick={onRequestClose}
        className={`sm:p-3 p-2 opacity-50 hover:opacity-100 text-white absolute top-8 sm:top-[50px] right-8 sm:right-[50px] rounded-full transition-all duration-300 ${modalButtonColor}`}
      >
        <FiX />
      </button>
    </Modal>
  );
};

export default MainModal;