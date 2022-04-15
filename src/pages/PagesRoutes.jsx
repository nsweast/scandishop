import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';
import { Component } from 'react';
import Header from '../components/Header';
import ProductsListPage from '../components/ProductsListPage';
import ProductPage from '../components/ProductPage';
import CartPage from '../components/CartPage';
import { Container } from '../components/MainPage/MainPage.styles';

class Page extends Component {
  render() {
    return (
      <Container>
        <Header />
        <Outlet />
      </Container>
    );
  }
}

class PagesRoutes extends Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Page />}>
            <Route path="/products/:category" element={<ProductsListPage />} />
            <Route path="/products/:category/:id" element={<ProductPage />} />
            <Route path="cart" element={<CartPage />} />
            <Route path="*" element={<div>Item doesn't exist</div>} />
          </Route>
        </Routes>
      </BrowserRouter>
    );
  }
}

export default PagesRoutes;
