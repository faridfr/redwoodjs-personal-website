import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import 'src/lib/formatters'

const DELETE_EDUCATION_MUTATION = gql`
  mutation DeleteEducationMutation($id: Int!) {
    deleteEducation(id: $id) {
      id
    }
  }
`

const Education = ({ education }) => {
  const [deleteEducation] = useMutation(DELETE_EDUCATION_MUTATION, {
    onCompleted: () => {
      toast.success('Education deleted')
      navigate(routes.educations())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete education ' + id + '?')) {
      deleteEducation({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            Education {education.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{education.id}</td>
            </tr>
            <tr>
              <th>Title</th>
              <td>{education.title}</td>
            </tr>
            <tr>
              <th>Description</th>
              <td>{education.description}</td>
            </tr>
            <tr>
              <th>From year</th>
              <td>{education.fromYear}</td>
            </tr>
            <tr>
              <th>To year</th>
              <td>{education.toYear}</td>
            </tr>
            <tr>
              <th>Image id</th>
              <td>{education.imageId}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editEducation({ id: education.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(education.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default Education
