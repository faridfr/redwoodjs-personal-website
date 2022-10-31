import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { QUERY } from 'src/components/Skill/SkillsCell'
import { checkboxInputTag, truncate } from 'src/lib/formatters'

const DELETE_SKILL_MUTATION = gql`
  mutation DeleteSkillMutation($id: Int!) {
    deleteSkill(id: $id) {
      id
    }
  }
`

const SkillsList = ({ skills }) => {
  const [deleteSkill] = useMutation(DELETE_SKILL_MUTATION, {
    onCompleted: () => {
      toast.success('Skill deleted')
    },
    onError: (error) => {
      toast.error(error.message)
    },
    // This refetches the query on the list page. Read more about other ways to
    // update the cache over here:
    // https://www.apollographql.com/docs/react/data/mutations/#making-all-other-cache-updates
    refetchQueries: [{ query: QUERY }],
    awaitRefetchQueries: true,
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete skill ' + id + '?')) {
      deleteSkill({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Degree</th>
            <th>Percent</th>
            <th>Category</th>
            <th>Active</th>
            <th>Sort</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {skills.map((skill) => (
            <tr key={skill.id}>
              <td>{truncate(skill.id)}</td>
              <td>{truncate(skill.name)}</td>
              <td>{truncate(skill.degree)}</td>
              <td>{truncate(skill.percent)}</td>
              <td>{truncate(skill.category)}</td>
              <td>{checkboxInputTag(skill.active)}</td>
              <td>{truncate(skill.sort)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.skill({ id: skill.id })}
                    title={'Show skill ' + skill.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editSkill({ id: skill.id })}
                    title={'Edit skill ' + skill.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete skill ' + skill.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(skill.id)}
                  >
                    Delete
                  </button>
                </nav>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default SkillsList
