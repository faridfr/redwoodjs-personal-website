import { navigate, routes } from '@redwoodjs/router'

import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import ImagesOnExperiencesForm from 'src/components/ImagesOnExperiences/ImagesOnExperiencesForm'

export const QUERY = gql`
  query EditImagesOnExperiencesById($id: Int!) {
    imagesOnExperiences: imagesOnExperiences(id: $id) {
      id
      imageId
      experienceId
    }
  }
`
const UPDATE_IMAGES_ON_EXPERIENCES_MUTATION = gql`
  mutation UpdateImagesOnExperiencesMutation(
    $id: Int!
    $input: UpdateImagesOnExperiencesInput!
  ) {
    updateImagesOnExperiences(id: $id, input: $input) {
      id
      imageId
      experienceId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ imagesOnExperiences }) => {
  const [updateImagesOnExperiences, { loading, error }] = useMutation(
    UPDATE_IMAGES_ON_EXPERIENCES_MUTATION,
    {
      onCompleted: () => {
        toast.success('ImagesOnExperiences updated')
        navigate(routes.imagesOnExperienceses())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input, id) => {
    updateImagesOnExperiences({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit ImagesOnExperiences {imagesOnExperiences?.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <ImagesOnExperiencesForm
          imagesOnExperiences={imagesOnExperiences}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
