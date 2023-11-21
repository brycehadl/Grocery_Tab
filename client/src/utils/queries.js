import { gql } from '@apollo/client';

export const QUERY_USER = gql`
  query user {
    user {
      _id
      firstName
      lastName
      email
    }
  }
`;

export const QUERY_USERS = gql`
  query users {
    users {
      _id
      firstName
      lastName
      email
    }
  }
`;

export const QUERY_PRODUCT = gql`
  query product($_id: ID!) {
    product(_id: $_id) {
      _id
      name
      price
      description
      image
      quantity
      category
    }
  }
`;

export const QUERY_PRODUCTS = gql`
  query products {
    products {
      _id
      name
      price
      description
      image
      quantity
      category
    }
  }
`;

export const QUERY_STORE = gql`
  query store($_id: ID!) {
    store(_id: $_id) {
      _id
      storeName
      storeOwner
      products
    }
  }
`;

export const QUERY_STORES = gql`
  query stores {
    stores {
      _id
      storeName
      storeOwner
      products
    }
  }
`;

export const QUERY_CHECKOUT = gql`
  query checkout($products: ID!) {
    checkout(products: $products) {
      session
    }
  }
`;

export const QUERY_ORDER = gql`
  query order($_id: ID!) {
    order(_id: $_id) {
      _id
      purchaseDate
      products
    }
  }
`;
