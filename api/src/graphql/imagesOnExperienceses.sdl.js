export const schema = gql`
  type ImagesOnExperiences {
    id: Int!
    image: Image!
    imageId: Int!
    experience: Experience!
    experienceId: Int!
  }

  type Query {
    imagesOnExperienceses: [ImagesOnExperiences!]! @requireAuth
    imagesOnExperiences(id: Int!): ImagesOnExperiences @requireAuth
  }

  input CreateImagesOnExperiencesInput {
    imageId: Int!
    experienceId: Int!
  }

  input UpdateImagesOnExperiencesInput {
    imageId: Int
    experienceId: Int
  }

  type Mutation {
    createImagesOnExperiences(
      input: CreateImagesOnExperiencesInput!
    ): ImagesOnExperiences! @requireAuth
    updateImagesOnExperiences(
      id: Int!
      input: UpdateImagesOnExperiencesInput!
    ): ImagesOnExperiences! @requireAuth
    deleteImagesOnExperiences(id: Int!): ImagesOnExperiences! @requireAuth
  }
`
