export const schema = gql`
  type Image {
    id: Int!
    image_url: String
    background_position: String
    active: Boolean!
    sort: Int!
  }

  type Query {
    images: [Image!]! @requireAuth
    image(id: Int!): Image @requireAuth
  }

  input CreateImageInput {
    image_url: String
    background_position: String
    active: Boolean!
    sort: Int!
  }

  input UpdateImageInput {
    image_url: String
    background_position: String
    active: Boolean
    sort: Int
  }

  type Mutation {
    createImage(input: CreateImageInput!): Image! @requireAuth
    updateImage(id: Int!, input: UpdateImageInput!): Image! @requireAuth
    deleteImage(id: Int!): Image! @requireAuth
  }
`
