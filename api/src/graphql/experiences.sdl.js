export const schema = gql`
  type Experience {
    id: Int!
    title: String
    image: Image
    imageId: Int
    fromDateTime: DateTime
    toDateTime: DateTime
    location: String
    description: String
    percent: Int
    category: String
    active: Boolean!
    sort: Int!
  }

  type Query {
    experiences: [Experience!]! @requireAuth
    experience(id: Int!): Experience @requireAuth
  }

  input CreateExperienceInput {
    title: String
    imageId: Int
    fromDateTime: DateTime
    toDateTime: DateTime
    location: String
    description: String
    percent: Int
    category: String
    active: Boolean!
    sort: Int!
  }

  input UpdateExperienceInput {
    title: String
    imageId: Int
    fromDateTime: DateTime
    toDateTime: DateTime
    location: String
    description: String
    percent: Int
    category: String
    active: Boolean
    sort: Int
  }

  type Mutation {
    createExperience(input: CreateExperienceInput!): Experience! @requireAuth
    updateExperience(id: Int!, input: UpdateExperienceInput!): Experience!
      @requireAuth
    deleteExperience(id: Int!): Experience! @requireAuth
  }
`
