import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  CheckboxField,
  NumberField,
  Submit,
} from '@redwoodjs/forms'

const ImageForm = (props) => {
  const onSubmit = (data) => {
    props.onSave(data, props?.image?.id)
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
          name="image_url"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Image url
        </Label>

        <TextField
          name="image_url"
          defaultValue={props.image?.image_url}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="image_url" className="rw-field-error" />

        <Label
          name="background_position"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Background position
        </Label>

        <TextField
          name="background_position"
          defaultValue={props.image?.background_position}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="background_position" className="rw-field-error" />

        <Label
          name="active"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Active
        </Label>

        <CheckboxField
          name="active"
          defaultChecked={props.image?.active}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="active" className="rw-field-error" />

        <Label
          name="sort"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Sort
        </Label>

        <NumberField
          name="sort"
          defaultValue={props.image?.sort}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="sort" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default ImageForm
