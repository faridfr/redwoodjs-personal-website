import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import ExperienceForm from 'src/components/Experience/ExperienceForm'

const CREATE_EXPERIENCE_MUTATION = gql`
  mutation CreateExperienceMutation($input: CreateExperienceInput!) {
    createExperience(input: $input) {
      id
    }
  }
`

const NewExperience = () => {
  const [createExperience, { loading, error }] = useMutation(
    CREATE_EXPERIENCE_MUTATION,
    {
      onCompleted: () => {
        toast.success('Experience created')
        navigate(routes.experiences())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input) => {
    createExperience({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New Experience</h2>
      </header>
      <div className="rw-segment-main">
        <ExperienceForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewExperience
