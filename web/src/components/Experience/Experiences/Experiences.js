import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { QUERY } from 'src/components/Experience/ExperiencesCell'
import { checkboxInputTag, timeTag, truncate } from 'src/lib/formatters'

const DELETE_EXPERIENCE_MUTATION = gql`
  mutation DeleteExperienceMutation($id: Int!) {
    deleteExperience(id: $id) {
      id
    }
  }
`

const ExperiencesList = ({ experiences }) => {
  const [deleteExperience] = useMutation(DELETE_EXPERIENCE_MUTATION, {
    onCompleted: () => {
      toast.success('Experience deleted')
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
    if (confirm('Are you sure you want to delete experience ' + id + '?')) {
      deleteExperience({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Image id</th>
            <th>From date time</th>
            <th>To date time</th>
            <th>Location</th>
            <th>Description</th>
            <th>Percent</th>
            <th>Category</th>
            <th>Active</th>
            <th>Sort</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {experiences.map((experience) => (
            <tr key={experience.id}>
              <td>{truncate(experience.id)}</td>
              <td>{truncate(experience.title)}</td>
              <td>{truncate(experience.imageId)}</td>
              <td>{timeTag(experience.fromDateTime)}</td>
              <td>{timeTag(experience.toDateTime)}</td>
              <td>{truncate(experience.location)}</td>
              <td>{truncate(experience.description)}</td>
              <td>{truncate(experience.percent)}</td>
              <td>{truncate(experience.category)}</td>
              <td>{checkboxInputTag(experience.active)}</td>
              <td>{truncate(experience.sort)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.experience({ id: experience.id })}
                    title={'Show experience ' + experience.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editExperience({ id: experience.id })}
                    title={'Edit experience ' + experience.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete experience ' + experience.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(experience.id)}
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

export default ExperiencesList
