import { navigate, routes } from '@redwoodjs/router'

import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import SkillForm from 'src/components/Skill/SkillForm'

export const QUERY = gql`
  query EditSkillById($id: Int!) {
    skill: skill(id: $id) {
      id
      name
      degree
      percent
      category
      active
      sort
    }
  }
`
const UPDATE_SKILL_MUTATION = gql`
  mutation UpdateSkillMutation($id: Int!, $input: UpdateSkillInput!) {
    updateSkill(id: $id, input: $input) {
      id
      name
      degree
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

export const Success = ({ skill }) => {
  const [updateSkill, { loading, error }] = useMutation(UPDATE_SKILL_MUTATION, {
    onCompleted: () => {
      toast.success('Skill updated')
      navigate(routes.skills())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onSave = (input, id) => {
    updateSkill({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit Skill {skill?.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <SkillForm
          skill={skill}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
