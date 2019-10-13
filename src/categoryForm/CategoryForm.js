import React, { Component } from "react";
import { Row } from 'react-bootstrap';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import NavBar from "../navBar/NavBar";
import './style.css'
import BookListing from "../bookListing/BookListing";

class CategoryForm extends Component {
  constructor() {
    super();
    this.state = {
      category: null,
      categories: JSON.parse(localStorage.getItem('categories'))
    };
  }

  handleAddCategoey = () => {
    if (this.state.category === null) {
      alert("Please write the ctegory name");
    }
    else {
    let categories = this.state.categories;
    const uuidv1 = require('uuid/v1');
    let id = uuidv1();
    
    let category = {
      'id': id,
      'name': this.state.category
    };
      categories.push(category);
      this.setState({ categories });
      localStorage.setItem('categories', JSON.stringify(this.state.categories));
      alert("Category has been added successfuly!")
    }

  }
  componentDidMount() {
    console.log(typeof (this.state.categories));
  }
  handleCategoryChange = (event) => {
    this.setState({ category: event.target.value });

  }
  render() {
    return (
      <div>
        <NavBar />
        <div className="container">
          <div className="row">
            <div className="col-md-6 test">
              <Form>
                <FormGroup>
                  <h3>Add New Category</h3>
                  <Label for="exampleEmail">Name</Label><br />
                  <input type="text" value={this.state.category} onChange={this.handleCategoryChange} />
                </FormGroup>
                <Button onClick={this.handleAddCategoey}>Save</Button>
              </Form>
            </div>
          </div>

        </div>


      </div>

    );
  }
}

export default CategoryForm;