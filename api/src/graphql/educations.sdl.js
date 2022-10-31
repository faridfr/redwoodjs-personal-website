export const schema = gql`
  type Education {
    id: Int!
    title: String
    description: String
    fromYear: String
    toYear: String
    image: Image
    imageId: Int
  }

  type Query {
    educations: [Education!]! @requireAuth
    education(id: Int!): Education @requireAuth
  }

  input CreateEducationInput {
    title: String
    description: String
    fromYear: String
    toYear: String
    imageId: Int
  }

  input UpdateEducationInput {
    title: String
    description: String
    fromYear: String
    toYear: String
    imageId: Int
  }

  type Mutation {
    createEducation(input: CreateEducationInput!): Education! @requireAuth
    updateEducation(id: Int!, input: UpdateEducationInput!): Education!
      @requireAuth
    deleteEducation(id: Int!): Education! @requireAuth
  }
`
