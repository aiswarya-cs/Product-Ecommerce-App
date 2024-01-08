import React, { useEffect, useState } from 'react';
import { Button, Container, Form, Nav, Navbar } from 'react-bootstrap';
import { ShoppingCartOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Header.css';

const Headers = () => {
  const [searchResults, setSearchResults] = useState('');
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios.get('https://fakestoreapi.com/products').then((response) => {
      setProducts(response.data);
    });
  };

  useEffect(() => {
    const results = products.filter((product) => {
      return (
        product.category &&
        product.category.toLowerCase().includes(searchResults.toLowerCase())
      );
    });
    setFilteredProducts(results);
  }, [searchResults, products]);

  const handleChange = (value) => {
    setSearchResults(value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    // You can perform additional search-related logic here if needed
  };

  return (
    <div>
      <Navbar expand="lg" className="shadow bg-white navbar">
        <Container fluid>
          <Navbar.Brand className="header-navbar">CartCraft</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="ms-auto me-2 my-2 my-lg-0"
              style={{ maxHeight: '150px' }}
              navbarScroll
            >
              <Nav.Link>
                <Link to={'/'} className="navbar-list">
                  Home
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link to={'/cart'} className="navbar-list">
                  Product
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link to={'/'} className="navbar-list">
                  Contact Us
                </Link>
              </Nav.Link>
            </Nav>
            <Form className="d-flex" onSubmit={handleSearch}>
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                value={searchResults}
                onChange={(e) => handleChange(e.target.value)}
              />
              <Button variant="outline-success" type="submit">
                Search
              </Button>
            </Form>
            {searchResults && (
              <div className="search-results">
                {filteredProducts.map((product) => (
                  <Link
                    to={`/detailed/${product.id}`}
                    key={product.id}
                    className="link-head-search"
                  >
                    <div className="search-result-item">
                      {product.title}
                      <img
                        src={product.image}
                        className="search-result-image ms-auto"
                        alt={product.title}
                      />
                    </div>
                  </Link>
                ))}
              </div>
            )}
            <ShoppingCartOutlined className="cart-icon" />
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Headers;
