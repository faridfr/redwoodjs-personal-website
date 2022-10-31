import { Link, routes } from '@redwoodjs/router'

import ImagesOnExperienceses from 'src/components/ImagesOnExperiences/ImagesOnExperienceses'

export const QUERY = gql`
  query FindImagesOnExperienceses {
    imagesOnExperienceses {
      id
      imageId
      experienceId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No imagesOnExperienceses yet. '}
      <Link to={routes.newImagesOnExperiences()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ imagesOnExperienceses }) => {
  return <ImagesOnExperienceses imagesOnExperienceses={imagesOnExperienceses} />
}
