import {
  Form,
  FormError,
  FieldError,
  Label,
  NumberField,
  Submit,
} from '@redwoodjs/forms'

const ImagesOnExperiencesForm = (props) => {
  const onSubmit = (data) => {
    props.onSave(data, props?.imagesOnExperiences?.id)
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
          name="imageId"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Image id
        </Label>

        <NumberField
          name="imageId"
          defaultValue={props.imagesOnExperiences?.imageId}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="imageId" className="rw-field-error" />

        <Label
          name="experienceId"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Experience id
        </Label>

        <NumberField
          name="experienceId"
          defaultValue={props.imagesOnExperiences?.experienceId}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="experienceId" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default ImagesOnExperiencesForm
