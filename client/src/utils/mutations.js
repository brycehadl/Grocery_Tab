import { gql } from '@apollo/client';

export const LOGIN_MUTATION = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
    }
  }
`;

export const SIGNIN_MUTATION = gql`
  mutation signin($firstName: String!, $lastName: String!, $email: String!, $password: String!) {
    signin(firstName: $firstName, lastName: $lastName, email: $email, password: $password) {
      firstName
      lastName
      email
      token
    }
  }
`;

export const ADD_USER_MUTATION = gql`
  mutation addUser($username: String!, $email: String!, $password: String!, $account: String!, $store: ID) {
    addUser(username: $username, email: $email, password: $password, account: $account, store: $store) {
      username
      email
      account
      store
      token
    }
  }
`;

export const UPDATE_USER_MUTATION = gql`
  mutation updateUser($username: String, $email: String, $password: String, $store: ID) {
    updateUser(username: $username, email: $email, password: $password, store: $store) {
      username
      email
      store
    }
  }
`;

export const ADD_ORDER_MUTATION = gql`
  mutation addOrder($products: ID) {
    addOrder(products: $products) {
      products
    }
  }
`;

export const ADD_PRODUCT_MUTATION = gql`
  mutation addProduct($name: String!, $price: Float!, $description: String, $quantity: Int, $category: ID!) {
    addProduct(name: $name, price: $price, description: $description, quantity: $quantity, category: $category) {
      name
      price
      description
      quantity
      category
    }
  }
`;

export const UPDATE_PRODUCT_MUTATION = gql`
  mutation updateProduct($name: String, $price: Int, $description: String, $quantity: Int, $category: ID!) {
    updateProduct(name: $name, price: $price, description: $description, quantity: $quantity, category: $category) {
      name
      price
      description
      quantity
      category
    }
  }
`;

export const CREATE_STORE_MUTATION = gql`
  mutation createStore($storeName: String!, $storeOwner: String!) {
    createStore(storeName: $storeName, storeOwner: $storeOwner) {
      storeName
      storeOwner
    }
  }
`;
