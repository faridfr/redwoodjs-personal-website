import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import SettingForm from 'src/components/Setting/SettingForm'

const CREATE_SETTING_MUTATION = gql`
  mutation CreateSettingMutation($input: CreateSettingInput!) {
    createSetting(input: $input) {
      id
    }
  }
`

const NewSetting = () => {
  const [createSetting, { loading, error }] = useMutation(
    CREATE_SETTING_MUTATION,
    {
      onCompleted: () => {
        toast.success('Setting created')
        navigate(routes.settings())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input) => {
    createSetting({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New Setting</h2>
      </header>
      <div className="rw-segment-main">
        <SettingForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewSetting
