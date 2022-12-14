export const schema = gql`
  type User {
    id: Int!
    username: String!
    password: String
    role: String
    image: Image
    imageId: Int
  }

  type Query {
    users: [User!]! @requireAuth
    user(id: Int!): User @requireAuth
  }

  input CreateUserInput {
    username: String!
    password: String
    role: String
    imageId: Int
  }

  input UpdateUserInput {
    username: String
    password: String
    role: String
    imageId: Int
  }

  type Mutation {
    createUser(input: CreateUserInput!): User! @requireAuth
    updateUser(id: Int!, input: UpdateUserInput!): User! @requireAuth
    deleteUser(id: Int!): User! @requireAuth
  }
`
