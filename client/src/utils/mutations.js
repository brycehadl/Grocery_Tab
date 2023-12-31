import { gql } from '@apollo/client';

export const LOGIN_MUTATION = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_ORDER = gql`
  mutation addOrder($products: [ID]!) {
    addOrder(products: $products) {
      purchaseDate
      products {
        _id
        name
        description
        price
        quantity
        
      }
    }
  }
`;

export const SIGNUP =gql`
  mutation signin($firstName: String!, $lastName: String!, $email: String!, $password: String!){
    signin(firstName:$firstName, lastName:$lastName, email:$email, password:$password){
      token
      user{
        _id
        username
        email
      }
    }
  }

`