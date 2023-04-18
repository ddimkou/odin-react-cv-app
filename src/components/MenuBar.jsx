import React from "react";
import html2pdf from "html2pdf.js";

function MenuBar() {
  const handleSaveAsPDFClick = () => {
    const previewCV = document.getElementById("previewCV");
    const opt = {
      margin: 1,
      filename: "CV.pdf",
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: {
        unit: "in",
        format: "a3",
        orientation: "portrait",
        compressPDF: true,
      },
    };
    html2pdf().set(opt).from(previewCV).save();
  };

  return (
    <div className="menu-bar">
      <button onClick={handleSaveAsPDFClick}>Save as PDF</button>
    </div>
  );
}

export default MenuBar;
