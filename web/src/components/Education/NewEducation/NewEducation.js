import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import EducationForm from 'src/components/Education/EducationForm'

const CREATE_EDUCATION_MUTATION = gql`
  mutation CreateEducationMutation($input: CreateEducationInput!) {
    createEducation(input: $input) {
      id
    }
  }
`

const NewEducation = () => {
  const [createEducation, { loading, error }] = useMutation(
    CREATE_EDUCATION_MUTATION,
    {
      onCompleted: () => {
        toast.success('Education created')
        navigate(routes.educations())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input) => {
    createEducation({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New Education</h2>
      </header>
      <div className="rw-segment-main">
        <EducationForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewEducation
