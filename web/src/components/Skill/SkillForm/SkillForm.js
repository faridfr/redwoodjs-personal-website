import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  NumberField,
  CheckboxField,
  Submit,
} from '@redwoodjs/forms'

const SkillForm = (props) => {
  const onSubmit = (data) => {
    props.onSave(data, props?.skill?.id)
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
          name="name"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Name
        </Label>

        <TextField
          name="name"
          defaultValue={props.skill?.name}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="name" className="rw-field-error" />

        <Label
          name="degree"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Degree
        </Label>

        <TextField
          name="degree"
          defaultValue={props.skill?.degree}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="degree" className="rw-field-error" />

        <Label
          name="percent"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Percent
        </Label>

        <NumberField
          name="percent"
          defaultValue={props.skill?.percent}
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
          defaultValue={props.skill?.category}
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
          defaultChecked={props.skill?.active}
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
          defaultValue={props.skill?.sort}
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

export default SkillForm
