export const schema = gql`
  type Skill {
    id: Int!
    name: String
    degree: String
    percent: Int
    category: String
    active: Boolean!
    sort: Int!
  }

  type Query {
    skills: [Skill!]! @requireAuth
    skill(id: Int!): Skill @requireAuth
  }

  input CreateSkillInput {
    name: String
    degree: String
    percent: Int
    category: String
    active: Boolean!
    sort: Int!
  }

  input UpdateSkillInput {
    name: String
    degree: String
    percent: Int
    category: String
    active: Boolean
    sort: Int
  }

  type Mutation {
    createSkill(input: CreateSkillInput!): Skill! @requireAuth
    updateSkill(id: Int!, input: UpdateSkillInput!): Skill! @requireAuth
    deleteSkill(id: Int!): Skill! @requireAuth
  }
`
