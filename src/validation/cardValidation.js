import Joi, { alt } from "joi";
import { validateEmailLogin, validatePasswordLogin } from "./loginValidation";

const titleSchema = Joi.object({
  title: Joi.string().min(2).max(256).required(),
});
const subTitleSchema = Joi.object({
  subTitle: Joi.string().min(2).max(256).required(),
});

const phoneSchema = Joi.object({
  phone: Joi.string().min(9).max(11).required(),
});

const countrySchema = Joi.object({
  country: Joi.string().min(2).max(256).required(),
});

const citySchema = Joi.object({
  city: Joi.string().min(2).max(256).required(),
});

const streetSchema = Joi.object({
  street: Joi.string().min(2).max(256).required(),
});

const houseNumberSchema = Joi.object({
  houseNumber: Joi.string().min(2).max(256).required(),
});

const urlSchema = Joi.object({
  url: Joi.string().min(2).max(256).required(),
});
const stateSchema = Joi.object({
  state: Joi.string().min(2).max(256).required(),
});
const webSchema = Joi.object({
  web: Joi.string().min(2).max(256).required(),
});
const altSchema = Joi.object({
  alt: Joi.string().min(2).max(256).required(),
});
const descriptionSchema = Joi.object({
  description: Joi.string().min(2).max(256).required(),
});
const zipSchema = Joi.object({
  zip: Joi.string().min(2).max(256).required(),
});

const validateTitleSchema = (title) => titleSchema.validate(title);
const validateUrlSchema = (url) => urlSchema.validate(url);
const validateWebSchema = (web) => webSchema.validate(web);
const validateStateSchema = (state) => stateSchema.validate(state);
const validateAltSchema = (state) => altSchema.validate(state);
const validateZipSchema = (zip) => zipSchema.validate(zip);

const validateSubTitleSchema = (subTitle) => subTitleSchema.validate(subTitle);

const validatePhoneSchema = (phone) => phoneSchema.validate(phone);

const validateCountrySchema = (country) => countrySchema.validate(country);

const validateCitySchema = (city) => citySchema.validate(city);

const validateStreetSchema = (street) => streetSchema.validate(street);

const validateHouseNumberSchema = (houseNumber) =>
  houseNumberSchema.validate(houseNumber);

const validateDescriptionSchema = (description) =>
  descriptionSchema.validate(description);

const validateSchema = {
  zip: validateZipSchema,
  alt: validateAltSchema,
  web: validateWebSchema,
  title: validateTitleSchema,
  state: validateStateSchema,
  subTitle: validateSubTitleSchema,
  phone: validatePhoneSchema,
  email: validateEmailLogin,
  password: validatePasswordLogin,
  country: validateCountrySchema,
  city: validateCitySchema,
  street: validateStreetSchema,
  houseNumber: validateHouseNumberSchema,
  description: validateDescriptionSchema,
  url: validateUrlSchema,
};

export {
  validateZipSchema,
  validateAltSchema,
  validateWebSchema,
  validateUrlSchema,
  validateStateSchema,
  validateTitleSchema,
  validateEmailLogin,
  validatePasswordLogin,
  validateSubTitleSchema,
  validatePhoneSchema,
  validateCountrySchema,
  validateCitySchema,
  validateStreetSchema,
  validateHouseNumberSchema,
  validateDescriptionSchema,
  validateSchema,
};

export default validateSchema;
