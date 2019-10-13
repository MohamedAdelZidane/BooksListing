import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem, Button
} from 'reactstrap';



class NavBar extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {

    return (
      <div>
        <Navbar style={{ backgroundColor: "black" }} light expand="md">
          <NavbarBrand style={{ color: "white" }} href="/">Book Listing</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <Button color="primary">Add New Book</Button>{' '}
                <Link to="/categoryForm">
                  <Button href="" color="primary">Add New Category</Button>{' '}
                </Link>
                <Button color="primary">Add New Author</Button>{' '}
              </NavItem>

            </Nav>
          </Collapse>
        </Navbar>
      </div>
    )
  }
}

export default NavBar
