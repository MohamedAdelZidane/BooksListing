import React, { Component } from 'react';
import books from '../books/books.json';
import './style.css'
import NavBar from '../navBar/NavBar.js';

class BookListing extends Component {
  constructor() {
    super();
    this.state = {
      books: [],
      authors: [],
      categories: [],
      selectedCategory: null,
      selectedAuthor: null
    };
  }

  handleCategories = () => {
    let filtered;
    if (this.state.selectedCategory) {
      filtered = books.books.filter(book =>
        book.category == this.state.selectedCategory.id
      );
    } else if (this.state.selectedAuthor) {
      filtered = books.books.filter(book =>
        book.author == this.state.selectedAuthor.id
      );
    } else {
      filtered = books.books
    }
    this.setState({
      books: filtered,
      authors: books.authors,
      categories: books.categories
    })
    localStorage.setItem('books', JSON.stringify(books.books));
    let cats = JSON.parse(localStorage.getItem('categories'));
    if (!cats) {
      localStorage.setItem('categories', JSON.stringify(books.categories));
    } else {
      this.setState({
        categories: cats
      })
    }
    localStorage.setItem('authors', JSON.stringify(books.authors));
  }

  componentDidMount() {
    this.handleCategories();
  }

  handleAuthorClick = (author) => {
    this.setState({ selectedAuthor: author, selectedCategory: null }, () => {
      this.handleCategories();
    });
    console.log(author.id);
  }
  handleCategoryClick = (category) => {
    this.setState({ selectedCategory: category, selectedAuthor: null }, () => {
      this.handleCategories();
    });
    console.log(category.id);
  }

  render() {
    console.log(this.state.books);
    return (

      <div>
        <NavBar/>
        <div class="container" style={{marginTop: "25px"}}>
          <div class="row">
            <div class="col-md-4">
              <div style={{ border: "1px solid black" }}>
                <div style={{ backgroundColor: "blue", color: "white" }}>
                  Categories
              </div>

                {this.state.categories.map(category => (
                  <div onClick={() => this.handleCategoryClick(category)}>
                    <ul>
                      <li style={{cursor: "pointer"}}>
                        {category.name}
                      </li>
                    </ul>
                  </div>
                ))}

              </div>
              <br/>
              <div style={{ border: "1px solid black" }} >
                <div style={{ backgroundColor: "blue", color: "white" }}>
                  Authors
              </div>

                {this.state.authors.map(author => (
                  <div onClick={() => this.handleAuthorClick(author)}>
                    <ul>
                      <li style={{cursor: "pointer"}}>
                        {author.name}
                      </li>
                    </ul>
                  </div>
                ))}

              </div>

            </div>

            <div class="col-md-8">
              {this.state.selectedAuthor &&

                <div class="span4">
                  <div class="content-heading"><h3>{this.state.selectedAuthor.name} </h3>
                    <h3>{this.state.selectedAuthor.jobTitle}</h3>
                    <p >{this.state.selectedAuthor.bio}</p>
                  </div>

                </div>
              }
              {this.state.selectedCategory &&

                <div class="span4">
                  <div class="content-heading"><h3>{this.state.selectedCategory.name} </h3>
                  </div>

                </div>
              }
              {this.state.books.map(book => (

                <div  class="span4">
                  <img style={{ float: "left", width: "20%" }} src={book.image} />
                  <div class="content-heading">
                    <h3 className="bookTitle">{book.title}</h3>
                    <p className="bookDescription">{book.description}</p>
                    <br/>
                  </div>

                  <hr />
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>







    )
  }
}

export default BookListing
