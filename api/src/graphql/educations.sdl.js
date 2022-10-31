export const schema = gql`
  type Education {
    id: Int!
    logo: String
    title: String
    description: String
    fromYear: String
    toYear: String
  }

  type Query {
    educations: [Education!]! @requireAuth
    education(id: Int!): Education @requireAuth
  }

  input CreateEducationInput {
    logo: String
    title: String
    description: String
    fromYear: String
    toYear: String
  }

  input UpdateEducationInput {
    logo: String
    title: String
    description: String
    fromYear: String
    toYear: String
  }

  type Mutation {
    createEducation(input: CreateEducationInput!): Education! @requireAuth
    updateEducation(id: Int!, input: UpdateEducationInput!): Education!
      @requireAuth
    deleteEducation(id: Int!): Education! @requireAuth
  }
`
