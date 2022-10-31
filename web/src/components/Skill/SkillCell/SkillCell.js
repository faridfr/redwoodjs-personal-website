import Skill from 'src/components/Skill/Skill'

export const QUERY = gql`
  query FindSkillById($id: Int!) {
    skill: skill(id: $id) {
      id
      name
      degree
      percent
      category
      active
      sort
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Skill not found</div>

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ skill }) => {
  return <Skill skill={skill} />
}
