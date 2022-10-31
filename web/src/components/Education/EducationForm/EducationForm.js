import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  NumberField,
  Submit,
} from '@redwoodjs/forms'

const EducationForm = (props) => {
  const onSubmit = (data) => {
    props.onSave(data, props?.education?.id)
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
          name="title"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Title
        </Label>

        <TextField
          name="title"
          defaultValue={props.education?.title}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="title" className="rw-field-error" />

        <Label
          name="description"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Description
        </Label>

        <TextField
          name="description"
          defaultValue={props.education?.description}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="description" className="rw-field-error" />

        <Label
          name="fromYear"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          From year
        </Label>

        <TextField
          name="fromYear"
          defaultValue={props.education?.fromYear}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="fromYear" className="rw-field-error" />

        <Label
          name="toYear"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          To year
        </Label>

        <TextField
          name="toYear"
          defaultValue={props.education?.toYear}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="toYear" className="rw-field-error" />

        <Label
          name="imageId"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Image id
        </Label>

        <NumberField
          name="imageId"
          defaultValue={props.education?.imageId}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="imageId" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default EducationForm
