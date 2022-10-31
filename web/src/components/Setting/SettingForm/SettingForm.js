import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  Submit,
} from '@redwoodjs/forms'

const SettingForm = (props) => {
  const onSubmit = (data) => {
    props.onSave(data, props?.setting?.id)
  }

  return (
    <div className="rw-form-wrapper">
      <Form onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />

        <Label
          name="key"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Key
        </Label>

        <TextField
          name="key"
          defaultValue={props.setting?.key}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="key" className="rw-field-error" />

        <Label
          name="value"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Value
        </Label>

        <TextField
          name="value"
          defaultValue={props.setting?.value}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="value" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default SettingForm
