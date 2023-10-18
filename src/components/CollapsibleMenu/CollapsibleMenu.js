import React from "react";
import { Nav } from "react-bootstrap";
import {
  FaHome,
  FaAddressBook,
  FaClipboardList,
  FaTasks,
} from "react-icons/fa";
import "./CollapsibleMenu.css";

const CollapsibleMenu = () => {
  return (
    <div className="collapsible-menu">
      <Nav defaultActiveKey="/dashboard" className="flex-column">
        <Nav.Link href="/">
          <FaHome />
          <span className="menu-label">Home</span>
        </Nav.Link>
        <Nav.Link href="/contacts">
          <FaAddressBook />
          <span className="menu-label">Contacts</span>
        </Nav.Link>
        <Nav.Link href="/leads">
          <FaClipboardList />
          <span className="menu-label">Leads</span>
        </Nav.Link>
        <Nav.Link href="/tasks">
          <FaTasks />
          <span className="menu-label">Tasks</span>
        </Nav.Link>
      </Nav>

      <div className="menu-footer">
        <p>Miraki Eco Tech</p>
      </div>
    </div>
  );
};

export default CollapsibleMenu;
