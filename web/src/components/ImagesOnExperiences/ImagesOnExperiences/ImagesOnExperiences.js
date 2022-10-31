import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import 'src/lib/formatters'

const DELETE_IMAGES_ON_EXPERIENCES_MUTATION = gql`
  mutation DeleteImagesOnExperiencesMutation($id: Int!) {
    deleteImagesOnExperiences(id: $id) {
      id
    }
  }
`

const ImagesOnExperiences = ({ imagesOnExperiences }) => {
  const [deleteImagesOnExperiences] = useMutation(
    DELETE_IMAGES_ON_EXPERIENCES_MUTATION,
    {
      onCompleted: () => {
        toast.success('ImagesOnExperiences deleted')
        navigate(routes.imagesOnExperienceses())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onDeleteClick = (id) => {
    if (
      confirm('Are you sure you want to delete imagesOnExperiences ' + id + '?')
    ) {
      deleteImagesOnExperiences({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            ImagesOnExperiences {imagesOnExperiences.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{imagesOnExperiences.id}</td>
            </tr>
            <tr>
              <th>Image id</th>
              <td>{imagesOnExperiences.imageId}</td>
            </tr>
            <tr>
              <th>Experience id</th>
              <td>{imagesOnExperiences.experienceId}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editImagesOnExperiences({ id: imagesOnExperiences.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(imagesOnExperiences.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default ImagesOnExperiences
