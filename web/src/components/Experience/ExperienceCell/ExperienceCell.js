import Experience from 'src/components/Experience/Experience'

export const QUERY = gql`
  query FindExperienceById($id: Int!) {
    experience: experience(id: $id) {
      id
      title
      imageId
      fromDateTime
      toDateTime
      location
      description
      percent
      category
      active
      sort
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Experience not found</div>

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ experience }) => {
  return <Experience experience={experience} />
}
