import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { checkboxInputTag } from 'src/lib/formatters'

const DELETE_SKILL_MUTATION = gql`
  mutation DeleteSkillMutation($id: Int!) {
    deleteSkill(id: $id) {
      id
    }
  }
`

const Skill = ({ skill }) => {
  const [deleteSkill] = useMutation(DELETE_SKILL_MUTATION, {
    onCompleted: () => {
      toast.success('Skill deleted')
      navigate(routes.skills())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete skill ' + id + '?')) {
      deleteSkill({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            Skill {skill.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{skill.id}</td>
            </tr>
            <tr>
              <th>Name</th>
              <td>{skill.name}</td>
            </tr>
            <tr>
              <th>Degree</th>
              <td>{skill.degree}</td>
            </tr>
            <tr>
              <th>Percent</th>
              <td>{skill.percent}</td>
            </tr>
            <tr>
              <th>Category</th>
              <td>{skill.category}</td>
            </tr>
            <tr>
              <th>Active</th>
              <td>{checkboxInputTag(skill.active)}</td>
            </tr>
            <tr>
              <th>Sort</th>
              <td>{skill.sort}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editSkill({ id: skill.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(skill.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default Skill
