import { Link, routes } from '@redwoodjs/router'

import Educations from 'src/components/Education/Educations'

export const QUERY = gql`
  query FindEducations {
    educations {
      id
      logo
      title
      description
      fromYear
      toYear
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No educations yet. '}
      <Link to={routes.newEducation()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ educations }) => {
  return <Educations educations={educations} />
}
