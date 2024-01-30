import { Fragment } from 'react'
import TextField from '@mui/material/TextField'
import Alert from '@mui/material/Alert'
import Grid from '@mui/material/Grid'
const RegisterPageBoxAlt = ({ inputsValue, errors, handleInputsChange, handleInputsBlur }) => {
  return (
    <Fragment>
      <Box component="form" noValidate sx={{ mt: 3 }} onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={4}>
            <TextField autoComplete="given-name" name="first" required fullWidth id="first" label="First Name" value={inputsValue.first} onChange={handleInputsChange} onBlur={handleInputsBlur} />
            {errors.first && <Alert severity="error">{errors.first}</Alert>}
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField autoComplete="given-name" name="middle" fullWidth id="middle" label="Middle Name" value={inputsValue.middle} onChange={handleInputsChange} />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField required fullWidth id="last" label="Last Name" name="last" autoComplete="family-name" value={inputsValue.last} onChange={handleInputsChange} onBlur={handleInputsBlur} />
            {errors.last && <Alert severity="error">{errors.last}</Alert>}
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField required fullWidth id="email" label="Email Address" name="email" autoComplete="email" value={inputsValue.email} onChange={handleInputsChange} onBlur={handleInputsBlur} />
            {errors.email && <Alert severity="error">{errors.email}</Alert>}
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField required fullWidth name="password" label="Password" type="password" id="password" autoComplete="new-password" value={inputsValue.password} onChange={handleInputsChange} onBlur={handleInputsBlur} />
            {errors.password && <Alert severity="error">{errors.password}</Alert>}
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField required fullWidth name="phone" label="Phone" id="phone" autoComplete="new-phone" value={inputsValue.phone} onChange={handleInputsChange} onBlur={handleInputsBlur} />
            {errors.phone && <Alert severity="error">{errors.phone}</Alert>}
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField fullWidth name="url" label="Url" id="url" autoComplete="new-url" value={inputsValue.url} onChange={handleInputsChange} />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField fullWidth name="alt" label="Alt" id="alt" autoComplete="new-alt" value={inputsValue.alt} onChange={handleInputsChange} />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField fullWidth name="state" label="State" id="state" autoComplete="new-state" value={inputsValue.state} onChange={handleInputsChange} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField required fullWidth name="country" label="Country" id="country" autoComplete="new-country" value={inputsValue.country} onChange={handleInputsChange} onBlur={handleInputsBlur} />
            {errors.country && <Alert severity="error">{errors.country}</Alert>}
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField required fullWidth name="city" label="City" id="city" autoComplete="new-city" value={inputsValue.city} onChange={handleInputsChange} onBlur={handleInputsBlur} />
            {errors.city && <Alert severity="error">{errors.city}</Alert>}
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField required fullWidth name="street" label="Street" id="street" autoComplete="new-street" value={inputsValue.street} onChange={handleInputsChange} onBlur={handleInputsBlur} />
            {errors.street && <Alert severity="error">{errors.street}</Alert>}
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField required fullWidth name="houseNumber" label="House Number" id="houseNumber" autoComplete="new-houseNumber" value={inputsValue.houseNumber} onChange={handleInputsChange} onBlur={handleInputsBlur} />
            {errors.houseNumber && <Alert severity="error">{errors.houseNumber}</Alert>}
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField required fullWidth name="zip" label="Zip" id="zip" autoComplete="new-zip" value={inputsValue.zip} onChange={handleInputsChange} onBlur={handleInputsBlur} />
            {errors.zip && <Alert severity="error">{errors.zip}</Alert>}
          </Grid>{' '}
        </Grid>
      </Box>
    </Fragment>
  )
}
export default RegisterPageBoxAlt
