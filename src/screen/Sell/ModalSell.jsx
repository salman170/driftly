import React from "react";

const ModalSell = ({ visible, onClose }) => {
  const handleOnClose = (e) => {
    if (e.target.id === "container") onClose();
  };
  if (!visible) return null;
  return (
    <div
      id="container"
      onClick={handleOnClose}
      className="fixed inset-0 flex flex-col items-center justify-center bg-black bg-opacity-60 backdrop-blur-sm"
    >
      <div className="m-1 overflow-hidden lg:w-2/3 xl:h-2/3">
        <video
          autoPlay
          muted
          loop
          style={{
            top: 0,
            left: 0,
            minWidth: "100%",
            minHeight: "100%",
            width: "auto",
            height: "auto",
            // borderWidth: "1px",
          }}
        >
          <source
            src="https://test-saboo-rks.s3.ap-south-1.amazonaws.com/heroVideo.mp4"
            type="video/mp4"
          />
        </video>
      </div>

      <button
        onClick={onClose}
        className="px-4 py-1 mt-4 text-lg text-white border rounded-full lg:px-8 lg:py-2 md:text-xl"
      >
        Close
      </button>
    </div>
  );
};

export default ModalSell;
