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

const validate = values => {
  const errors = {}
  const requiredFields = [
    'fullName',
    'email',
    'comment'
  ]
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
      <FormControlLabel value="period" control={<Radio />} label="Period" />
      <FormControlLabel value="standard" control={<Radio />} label="Standard" />
    </RadioGroup>
  </FormControl>
)

const renderFromHelper = ({ touched, error }) => {
  if (!(touched && error)) {
    return
  } else {
    return <FormHelperText>{touched && error}</FormHelperText>
  }
}

const renderSelectField = ({
  input,
  label,
  meta: { touched, error },
  children,
  ...custom
}) => (
  <FormControl error={touched && error}>
    <InputLabel htmlFor="age-native-simple">Age</InputLabel>
    <Select
      native
      {...input}
      {...custom}
      inputProps={{
        name: 'age',
        id: 'age-native-simple'
      }}
    >
      {children}
    </Select>
    {renderFromHelper({ touched, error })}
  </FormControl>
)

const ContactForm = props => {
  const { sendMessage, pristine, reset, submitting, classes } = props
  return (
    <form onSubmit={sendMessage} className="App-contact-form">
      <div>
        <Field
          name="fullName"
          component={renderTextField}
          label="Full Name"
          fullWidth
        />
      </div>
      <div>
        <Field name="companyName" component={renderTextField} label="Company Name" fullWidth />
      </div>
      <div>
        <Field name="email" component={renderTextField} label="Email" fullWidth />
      </div>
      <div>
        <Field name="typeContract" component={radioButton} label="Type of Contract">
          <Radio value="period" label="period" />
          <Radio value="standard" label="standard" />
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
          rowsMax="4"
          margin="normal"
          variant="filled"
          fullWidth
        />
      </div>
      <div className="u-flex">
        <Button type="submit" 
                color="primary"
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