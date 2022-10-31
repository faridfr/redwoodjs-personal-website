import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { QUERY } from 'src/components/Setting/SettingsCell'
import { truncate } from 'src/lib/formatters'

const DELETE_SETTING_MUTATION = gql`
  mutation DeleteSettingMutation($id: Int!) {
    deleteSetting(id: $id) {
      id
    }
  }
`

const SettingsList = ({ settings }) => {
  const [deleteSetting] = useMutation(DELETE_SETTING_MUTATION, {
    onCompleted: () => {
      toast.success('Setting deleted')
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
    if (confirm('Are you sure you want to delete setting ' + id + '?')) {
      deleteSetting({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Key</th>
            <th>Value</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {settings.map((setting) => (
            <tr key={setting.id}>
              <td>{truncate(setting.id)}</td>
              <td>{truncate(setting.key)}</td>
              <td>{truncate(setting.value)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.setting({ id: setting.id })}
                    title={'Show setting ' + setting.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editSetting({ id: setting.id })}
                    title={'Edit setting ' + setting.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete setting ' + setting.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(setting.id)}
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

export default SettingsList
