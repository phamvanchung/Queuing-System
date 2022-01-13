import * as Yup from "yup";

export const FORM_EQUIPMENT_VALIDATION = Yup.object().shape({
  id: Yup.string().required('Required'),
  name: Yup.string().required('Required'),
  ip: Yup.string().required('Required'),
  username: Yup.string().required('Required'),
  password: Yup.string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters."),
  useService: Yup.string().required()
});
