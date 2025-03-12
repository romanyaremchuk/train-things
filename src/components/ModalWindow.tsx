import React, { ReactNode, useState } from "react";
import "../styles/ModalWindow.css";

interface Props {
  active: boolean;
  setActive: (active: boolean) => void;
  children?: ReactNode;
}

const ModalWindow: React.FC<Props> = ({ active, setActive, children }) => {
  const [user, setUser] = useState<{ id: number; name: string }>();

  return (
    <div
      className={active ? "modal active" : "modal"}
      onClick={() => setActive(false)}
    >
      <div
        className={active ? "modal__content active" : "modal__content"}
        onClick={(e) => e.stopPropagation()}
      >
        {/* practicing */}
        {children}

        <form>
          <label>Name</label>
          <input />
        </form>
      </div>
    </div>
  );
};

export default ModalWindow;
