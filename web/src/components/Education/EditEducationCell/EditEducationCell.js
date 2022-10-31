import { navigate, routes } from '@redwoodjs/router'

import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import EducationForm from 'src/components/Education/EducationForm'

export const QUERY = gql`
  query EditEducationById($id: Int!) {
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
const UPDATE_EDUCATION_MUTATION = gql`
  mutation UpdateEducationMutation($id: Int!, $input: UpdateEducationInput!) {
    updateEducation(id: $id, input: $input) {
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

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ education }) => {
  const [updateEducation, { loading, error }] = useMutation(
    UPDATE_EDUCATION_MUTATION,
    {
      onCompleted: () => {
        toast.success('Education updated')
        navigate(routes.educations())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input, id) => {
    updateEducation({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit Education {education?.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <EducationForm
          education={education}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
