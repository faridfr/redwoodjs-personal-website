import Setting from 'src/components/Setting/Setting'

export const QUERY = gql`
  query FindSettingById($id: Int!) {
    setting: setting(id: $id) {
      id
      key
      value
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Setting not found</div>

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ setting }) => {
  return <Setting setting={setting} />
}
