import axios from 'axios';

import {ToastAndroid} from 'react-native';

import {makeObservable, observable, action, runInAction} from 'mobx';
import {BASE_URL} from './url';

import {categories} from '../data/categories';
import {products} from '../data/products';
import {cart} from '../data/cart';
import {wishlist} from '../data/wishlist';

class Product {
  state = {
    allProducts: [],
    searchedProducts: [],
    products: [],
    product: {},
    categories: [],
    category: null,
    cart: cart,
    wishlist: wishlist,
  };

  constructor() {
    makeObservable(this, {
      state: observable,
      getCategories: action,
      getProducts: action,
      getProductsByCategories: action,
      getSearchedProducts: action,
      getRandomProducts: action,
      addToCart: action,

      setCategory: action,
      setProduct: action,
    });
  }

  createToast = message => {
    ToastAndroid.showWithGravityAndOffset(
      message,
      ToastAndroid.LONG,
      ToastAndroid.BOTTOM,
      0,
      50,
    );
  };

  shuffle = a => {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      x = a[i];
      a[i] = a[j];
      a[j] = x;
    }
    return a;
  };

  getCategories = async () => {
    this.state.categories = categories;
  };

  getProducts = async () => {
    this.state.products = this.shuffle(products);
    this.state.allProducts = this.shuffle(products);
  };

  getProductsByCategories = async id => {
    this.state.products = this.shuffle(
      this.state.allProducts.filter(x => x.category === id),
    );
  };

  getSearchedProducts = text => {
    this.state.searchedProducts = this.shuffle(
      this.state.allProducts.filter(x =>
        x.name.toLowerCase().includes(text.toLowerCase()),
      ),
    );
  };

  getRandomProducts = () => {
    return this.shuffle(this.state.allProducts.slice(0, 6));
  };

  setCategory = id => {
    this.state.category = id;
  };

  setProduct = data => {
    this.state.product = data;
  };

  addToCart = product => {
    if (this.state.cart.find(x => x.product.id === product.id)) {
      this.createToast('Already in cart');
    } else {
      this.state.cart = [...this.state.cart, {product: product, quantity: 1}];
      this.createToast('Added to cart');
    }
  };

  updateCartQuantity = (id, quantity) => {
    if (quantity === 0) {
      this.state.cart = this.state.cart.filter(x => x.product.id !== id);
    } else {
      this.state.cart = this.state.cart.map(x =>
        x.product.id === id ? {...x, quantity: quantity} : x,
      );
    }
  };
}

export const ProductStore = new Product();
