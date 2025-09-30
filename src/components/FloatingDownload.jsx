import React from "react";
import { FaDownload } from "react-icons/fa"; 
const FloatingDownload = () => {
  const handleDownload = () => {
 
    const link = document.createElement("a");
    link.href = "/pdf/Price-list.pdf"; 
    link.download = "price-list.pdf";
    link.click();
  };
  return (
    <button
      onClick={handleDownload} title="Download Price List"
      className="floating-download"
      aria-label="Download Price List"
    >
      <FaDownload size={20} />
    </button>
  );
};
export default FloatingDownload;
