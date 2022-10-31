import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { QUERY } from 'src/components/ImagesOnExperiences/ImagesOnExperiencesesCell'
import { truncate } from 'src/lib/formatters'

const DELETE_IMAGES_ON_EXPERIENCES_MUTATION = gql`
  mutation DeleteImagesOnExperiencesMutation($id: Int!) {
    deleteImagesOnExperiences(id: $id) {
      id
    }
  }
`

const ImagesOnExperiencesesList = ({ imagesOnExperienceses }) => {
  const [deleteImagesOnExperiences] = useMutation(
    DELETE_IMAGES_ON_EXPERIENCES_MUTATION,
    {
      onCompleted: () => {
        toast.success('ImagesOnExperiences deleted')
      },
      onError: (error) => {
        toast.error(error.message)
      },
      // This refetches the query on the list page. Read more about other ways to
      // update the cache over here:
      // https://www.apollographql.com/docs/react/data/mutations/#making-all-other-cache-updates
      refetchQueries: [{ query: QUERY }],
      awaitRefetchQueries: true,
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
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Image id</th>
            <th>Experience id</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {imagesOnExperienceses.map((imagesOnExperiences) => (
            <tr key={imagesOnExperiences.id}>
              <td>{truncate(imagesOnExperiences.id)}</td>
              <td>{truncate(imagesOnExperiences.imageId)}</td>
              <td>{truncate(imagesOnExperiences.experienceId)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.imagesOnExperiences({
                      id: imagesOnExperiences.id,
                    })}
                    title={
                      'Show imagesOnExperiences ' +
                      imagesOnExperiences.id +
                      ' detail'
                    }
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editImagesOnExperiences({
                      id: imagesOnExperiences.id,
                    })}
                    title={'Edit imagesOnExperiences ' + imagesOnExperiences.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={
                      'Delete imagesOnExperiences ' + imagesOnExperiences.id
                    }
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(imagesOnExperiences.id)}
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

export default ImagesOnExperiencesesList
