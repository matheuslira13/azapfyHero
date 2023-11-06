import { IoClose } from "react-icons/io5";
import ReactModal from "react-modal";
import "./styles.scss";
import { ModalNewsLetterProps } from "./types";

export const ModalNewsLetter = ({
  email,
  name,
  onClose,
  openModal,
}: ModalNewsLetterProps) => {
  return (
    <ReactModal
      isOpen={openModal}
      ariaHideApp={false}
      className="modalContainerNewsLetter"
      style={{
        overlay: {
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(0, 0, 0, 0.75)",
        },
        content: {
          position: "absolute",
          top: "40px",
          left: "40px",
          right: "40px",
          bottom: "40px",
          border: "1px solid #ccc",
          background: "#fff",
          overflow: "hideen",
          WebkitOverflowScrolling: "touch",
          borderRadius: "16px",
          outline: "none",
          padding: "20px",
        },
      }}
    >
      <IoClose className="iconCloseModal" onClick={() => onClose(!openModal)} />
      <svg
        className="checkmark"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 52 52"
      >
        <circle
          className="checkmark__circle"
          cx="26"
          cy="26"
          r="25"
          fill="none"
        />
        <path
          className="checkmark__check"
          fill="none"
          d="M14.1 27.2l7.1 7.2 16.7-16.8"
        />
      </svg>
      <h2>
        Obrigado <span> {name}</span>, por assinar nossa NewsLetter
      </h2>
      <div className="text">
        Nao sera enviado nem tipo de email para <span>{email}</span> foi feito
        somente o front
      </div>
    </ReactModal>
  );
};
