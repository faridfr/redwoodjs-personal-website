import { navigate, routes } from '@redwoodjs/router'

import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import ExperienceForm from 'src/components/Experience/ExperienceForm'

export const QUERY = gql`
  query EditExperienceById($id: Int!) {
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
const UPDATE_EXPERIENCE_MUTATION = gql`
  mutation UpdateExperienceMutation($id: Int!, $input: UpdateExperienceInput!) {
    updateExperience(id: $id, input: $input) {
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

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ experience }) => {
  const [updateExperience, { loading, error }] = useMutation(
    UPDATE_EXPERIENCE_MUTATION,
    {
      onCompleted: () => {
        toast.success('Experience updated')
        navigate(routes.experiences())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input, id) => {
    updateExperience({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit Experience {experience?.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <ExperienceForm
          experience={experience}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
