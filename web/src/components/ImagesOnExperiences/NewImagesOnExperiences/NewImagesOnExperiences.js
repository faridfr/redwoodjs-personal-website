import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import ImagesOnExperiencesForm from 'src/components/ImagesOnExperiences/ImagesOnExperiencesForm'

const CREATE_IMAGES_ON_EXPERIENCES_MUTATION = gql`
  mutation CreateImagesOnExperiencesMutation(
    $input: CreateImagesOnExperiencesInput!
  ) {
    createImagesOnExperiences(input: $input) {
      id
    }
  }
`

const NewImagesOnExperiences = () => {
  const [createImagesOnExperiences, { loading, error }] = useMutation(
    CREATE_IMAGES_ON_EXPERIENCES_MUTATION,
    {
      onCompleted: () => {
        toast.success('ImagesOnExperiences created')
        navigate(routes.imagesOnExperienceses())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input) => {
    createImagesOnExperiences({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          New ImagesOnExperiences
        </h2>
      </header>
      <div className="rw-segment-main">
        <ImagesOnExperiencesForm
          onSave={onSave}
          loading={loading}
          error={error}
        />
      </div>
    </div>
  )
}

export default NewImagesOnExperiences
