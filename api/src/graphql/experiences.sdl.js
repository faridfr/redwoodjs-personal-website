export const schema = gql`
  type Experience {
    id: Int!
    title: String
    fromDate: String
    toDate: String
    location: String
    description: String
    percent: Int
    category: String
    active: Boolean!
    sort: Int!
    ImagesOnExperiences: [ImagesOnExperiences]!
  }

  type Query {
    experiences: [Experience!]! @requireAuth
    experience(id: Int!): Experience @requireAuth
  }

  input CreateExperienceInput {
    title: String
    fromDate: String
    toDate: String
    location: String
    description: String
    percent: Int
    category: String
    active: Boolean!
    sort: Int!
  }

  input UpdateExperienceInput {
    title: String
    fromDate: String
    toDate: String
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
