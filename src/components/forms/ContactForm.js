import React from 'react'
import { Field, reduxForm } from 'redux-form'
import TextField from '@material-ui/core/TextField'
import Checkbox from '@material-ui/core/Checkbox'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormControl from '@material-ui/core/FormControl'
import FormLabel from '@material-ui/core/FormLabel'
import Select from '@material-ui/core/Select'
import InputLabel from '@material-ui/core/InputLabel'
import FormHelperText from '@material-ui/core/FormHelperText'
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'
import Button from '@material-ui/core/Button'
import asyncValidate from './asyncValidate'

const requiredFields = [
  'fullName',
  'email',
  'comment'
]

const validate = values => {
  const errors = {}
  
  requiredFields.forEach(field => {
    if (!values[field]) {
      errors[field] = 'Required'
    }
  })
  if (
    values.email &&
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
  ) {
    errors.email = 'Invalid email address'
  }
  return errors
}

const renderTextField = ({
  label,
  input,
  meta: { touched, invalid, error },
  ...custom
}) => (
  <TextField
    label={label}
    placeholder={label}
    error={touched && invalid}
    helperText={touched && error}
    {...input}
    {...custom}
  />
)

const renderCheckbox = ({ input, label }) => (
  <div>
    <FormControlLabel
      control={
        <Checkbox
          checked={input.value ? true : false}
          onChange={input.onChange}
        />
      }
      label={label}
    />
  </div>
)

const radioButton = ({ input, label, ...rest }) => (
  <FormControl>
    <FormLabel component="legend">{label}</FormLabel>
    <RadioGroup {...input} {...rest}>
      <FormControlLabel value="Temporary" control={<Radio />} label="Temporary" />
      <FormControlLabel value="Permanent" control={<Radio />} label="Permanent" />
    </RadioGroup>
  </FormControl>
)

const renderFormHelper = ({ touched, error }) => {
  if (!(touched && error)) {
    return
  } else {
    return <FormHelperText>{touched && error}</FormHelperText>
  }
}

const ContactForm = props => {
  const { handleSubmit, pristine, reset, submitting } = props
  return (
    <form onSubmit={handleSubmit} className="App-contact-form">
      <div>
        <Field
          name="fullName"
          component={renderTextField}
          label="Full Name"
          fullWidth
          required
        />
      </div>
      <div>
        <Field name="companyName" component={renderTextField} label="Company Name" fullWidth />
      </div>
      <div>
        <Field name="email" component={renderTextField} label="Email" fullWidth required />
      </div>
      <div>
        <Field name="typeContract" component={radioButton} label="Type of Contract">
          <Radio value="Temporary" label="temporary" />
          <Radio value="Permanent" label="permanent" />
        </Field>
      </div>
      <div>
        <Field name="remote" component={renderCheckbox} label="Remote" />
      </div>
      <div>
        <Field
          name="comment"
          component={renderTextField}
          label="Comment"
          multiline
          rowsMax="20"
          margin="normal"
          variant="filled"
          fullWidth
          required
        />
      </div>
      <div className="u-flex">
        <Button type="submit" 
                color="secondary"
                variant="outlined" 
                disabled={pristine || submitting}>
          Send
        </Button>
        <Button color="secondary" 
                variant="outlined"
                disabled={pristine || submitting} 
                onClick={reset}>
          Clear
        </Button>
      </div>
    </form>
  )
}

export default reduxForm({
  form: 'ContactForm', // a unique identifier for this form
  validate,
  asyncValidate
})(ContactForm)