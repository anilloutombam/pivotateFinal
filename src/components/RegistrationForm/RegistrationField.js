import React from "react";
import { Field, ErrorMessage } from "formik";
import { Row, ErrorContainer } from "./RegistrationForm.style";

const RegistrationField = ({
  fieldLabel,
  type,
  name,
  as,
  placeholder,
  options = [],
  value
}) => (
  <Row>
    {type !== "checkbox" && (
      <label style={{ width: "100%" }}>
        {!as && (
          <Field
            className="form__input"
            type={type}
            name={name}
            placeholder={placeholder}
          />
        )}
        {as && (
          <Field name={name} as={as} placeholder={placeholder}>
            {options.length !== 0 &&
              options.map((opt, index) => (
                <option key={index} value={opt.value}>
                  {opt.label}
                </option>
              ))}
          </Field>
        )}
      </label>
    )}
    {type === "checkbox" && (
      <Field name={name}>
        {({ field, form }) => {
          return (
            <label>
              <input {...field} type="checkbox" />I agree to our
              <b>
                <a href="/terms-and-conditions" target="_blank">
                  &nbsp; Terms of Use &nbsp;
                </a>
              </b>
              and
              <b>
                <a href="/privacy-policy" target="_blank">
                  &nbsp; Privacy Policy &nbsp;
                </a>
              </b>
              by signing up
            </label>
          );
        }}
      </Field>
    )}
    <ErrorContainer>
      <ErrorMessage name={name} />
    </ErrorContainer>
  </Row>
);

export default RegistrationField;