import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import SkillForm from 'src/components/Skill/SkillForm'

const CREATE_SKILL_MUTATION = gql`
  mutation CreateSkillMutation($input: CreateSkillInput!) {
    createSkill(input: $input) {
      id
    }
  }
`

const NewSkill = () => {
  const [createSkill, { loading, error }] = useMutation(CREATE_SKILL_MUTATION, {
    onCompleted: () => {
      toast.success('Skill created')
      navigate(routes.skills())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onSave = (input) => {
    createSkill({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New Skill</h2>
      </header>
      <div className="rw-segment-main">
        <SkillForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewSkill
