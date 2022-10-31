import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { checkboxInputTag } from 'src/lib/formatters'

const DELETE_EXPERIENCE_MUTATION = gql`
  mutation DeleteExperienceMutation($id: Int!) {
    deleteExperience(id: $id) {
      id
    }
  }
`

const Experience = ({ experience }) => {
  const [deleteExperience] = useMutation(DELETE_EXPERIENCE_MUTATION, {
    onCompleted: () => {
      toast.success('Experience deleted')
      navigate(routes.experiences())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete experience ' + id + '?')) {
      deleteExperience({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            Experience {experience.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{experience.id}</td>
            </tr>
            <tr>
              <th>Title</th>
              <td>{experience.title}</td>
            </tr>
            <tr>
              <th>From date</th>
              <td>{experience.fromDate}</td>
            </tr>
            <tr>
              <th>To date</th>
              <td>{experience.toDate}</td>
            </tr>
            <tr>
              <th>Location</th>
              <td>{experience.location}</td>
            </tr>
            <tr>
              <th>Description</th>
              <td>{experience.description}</td>
            </tr>
            <tr>
              <th>Percent</th>
              <td>{experience.percent}</td>
            </tr>
            <tr>
              <th>Category</th>
              <td>{experience.category}</td>
            </tr>
            <tr>
              <th>Active</th>
              <td>{checkboxInputTag(experience.active)}</td>
            </tr>
            <tr>
              <th>Sort</th>
              <td>{experience.sort}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editExperience({ id: experience.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(experience.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default Experience
