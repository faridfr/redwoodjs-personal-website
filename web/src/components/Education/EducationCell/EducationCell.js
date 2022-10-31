import Education from 'src/components/Education/Education'

export const QUERY = gql`
  query FindEducationById($id: Int!) {
    education: education(id: $id) {
      id
      title
      description
      fromYear
      toYear
      imageId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Education not found</div>

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ education }) => {
  return <Education education={education} />
}
