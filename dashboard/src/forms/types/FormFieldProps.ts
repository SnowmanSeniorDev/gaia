import { DeepRequired, FieldErrorsImpl } from "react-hook-form";
import { Config } from "../../configuration/Configuration";
import { Field } from "../ConfigForm";

export interface FormFieldProps {
  headline: string;
  field: Field;
  errors: FieldErrorsImpl<DeepRequired<Config>>;
  handleDependantFields: Function;
  register: Function;
}
