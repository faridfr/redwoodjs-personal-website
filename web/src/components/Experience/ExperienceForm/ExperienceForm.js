import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  NumberField,
  DatetimeLocalField,
  CheckboxField,
  Submit,
} from '@redwoodjs/forms'

const formatDatetime = (value) => {
  if (value) {
    return value.replace(/:\d{2}\.\d{3}\w/, '')
  }
}

const ExperienceForm = (props) => {
  const onSubmit = (data) => {
    props.onSave(data, props?.experience?.id)
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
          defaultValue={props.experience?.title}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="title" className="rw-field-error" />

        <Label
          name="imageId"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Image id
        </Label>

        <NumberField
          name="imageId"
          defaultValue={props.experience?.imageId}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="imageId" className="rw-field-error" />

        <Label
          name="fromDateTime"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          From date time
        </Label>

        <DatetimeLocalField
          name="fromDateTime"
          defaultValue={formatDatetime(props.experience?.fromDateTime)}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="fromDateTime" className="rw-field-error" />

        <Label
          name="toDateTime"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          To date time
        </Label>

        <DatetimeLocalField
          name="toDateTime"
          defaultValue={formatDatetime(props.experience?.toDateTime)}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="toDateTime" className="rw-field-error" />

        <Label
          name="location"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Location
        </Label>

        <TextField
          name="location"
          defaultValue={props.experience?.location}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="location" className="rw-field-error" />

        <Label
          name="description"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Description
        </Label>

        <TextField
          name="description"
          defaultValue={props.experience?.description}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="description" className="rw-field-error" />

        <Label
          name="percent"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Percent
        </Label>

        <NumberField
          name="percent"
          defaultValue={props.experience?.percent}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="percent" className="rw-field-error" />

        <Label
          name="category"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Category
        </Label>

        <TextField
          name="category"
          defaultValue={props.experience?.category}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="category" className="rw-field-error" />

        <Label
          name="active"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Active
        </Label>

        <CheckboxField
          name="active"
          defaultChecked={props.experience?.active}
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
          defaultValue={props.experience?.sort}
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

export default ExperienceForm
