import { Link, routes } from '@redwoodjs/router'

import Experiences from 'src/components/Experience/Experiences'

export const QUERY = gql`
  query FindExperiences {
    experiences {
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

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No experiences yet. '}
      <Link to={routes.newExperience()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ experiences }) => {
  return <Experiences experiences={experiences} />
}
