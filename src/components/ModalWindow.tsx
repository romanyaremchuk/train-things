import React, { ReactNode, useEffect, useState } from "react";
import "../styles/ModalWindow.css";
import { User } from "../api/api-users";

interface Props {
  active: boolean;
  newUserId: number;
  addNewUser: (newUser: User) => void;
  setActive: (active: boolean) => void;
  children?: ReactNode;
}

const ModalWindow: React.FC<Props> = ({
  active,
  setActive,
  addNewUser,
  newUserId,
  children,
}) => {
  const [user, setUser] = useState<User>({
    id: newUserId,
    firstName: "",
    lastName: "",
    username: "",
    age: 0,
    birthDate: new Date(),
    userCreatedDated: new Date(),
    email: "",
    hair: {
      color: "",
      type: "",
    },
  });

  useEffect(() => {
    setUser((prevUser) => ({ ...prevUser, id: newUserId }));
  }, [newUserId]);

  const labelStyle = {
    padding: "10px",
  };

  return (
    <div
      className={active ? "modal active" : "modal"}
      onClick={() => setActive(false)}
    >
      <div
        className={active ? "modal__content active" : "modal__content"}
        onClick={(e) => e.stopPropagation()}
      >
        <form style={{ margin: "20px" }}>
          <label style={labelStyle}>First Name</label>
          <input
            value={user?.firstName}
            onChange={(e) => setUser({ ...user, firstName: e.target.value })}
            placeholder="First Name"
          />

          <br />

          <label style={labelStyle}>Last Name</label>
          <input
            value={user?.lastName}
            onChange={(e) => setUser({ ...user, lastName: e.target.value })}
            placeholder="Last Name"
          />

          <br />

          <label style={labelStyle}>Username</label>
          <input
            value={user?.username}
            onChange={(e) => setUser({ ...user, username: e.target.value })}
            placeholder="Username"
          />

          <br />

          <label style={labelStyle}>Date of birth</label>
          <input
            value={user?.birthDate.toISOString().split("T")[0]}
            type="date"
            onChange={(e) =>
              setUser({ ...user, birthDate: new Date(e.target.value) })
            }
          />

          <br />

          <label style={labelStyle}>Email</label>
          <input
            value={user?.email}
            type="email"
            onChange={(e) => setUser({ ...user, email: e.target.value })}
            placeholder="email"
          />

          <br />

          <h3>Hair</h3>

          <label style={labelStyle}>Color</label>
          <input
            value={user.hair?.color}
            onChange={(e) =>
              setUser({
                ...user,
                hair: {
                  ...user.hair,
                  color: e.target.value,
                  type: user.hair?.type || "",
                },
              })
            }
            placeholder="Hair color"
          />

          <br />

          <label style={labelStyle}>Type</label>
          <input
            value={user?.hair?.type}
            onChange={(e) =>
              setUser({
                ...user,
                hair: {
                  ...user.hair,
                  type: e.target.value,
                  color: user.hair?.color || "",
                },
              })
            }
            placeholder="Hair type"
          />

          <button
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              margin: "20px",
            }}
            onClick={(e) => {
              e.preventDefault();
              addNewUser(user);
              console.log(user);
            }}
          >
            Add user
          </button>
        </form>
      </div>
    </div>
  );
};

export default ModalWindow;
