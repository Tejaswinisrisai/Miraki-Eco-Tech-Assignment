import Dropdown from "react-bootstrap/Dropdown";

const ProfileDropdown = () => {
  return (
    <Dropdown>
      <Dropdown.Toggle
        id="dropdown-basic"
        style={{ background: "transparent", border: "none" }}
      >
        <img src="https://cdn-icons-png.flaticon.com/128/3135/3135715.png" />
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">My Profile</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Log Out</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default ProfileDropdown;
