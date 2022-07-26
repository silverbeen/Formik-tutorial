import { FormControlLabel, Radio } from "@material-ui/core";
import { FieldAttributes, useField } from "formik";

type RadioProps = { label: string } & FieldAttributes<{}>;

const LabeledRadio = ({ label, ...rest }: RadioProps) => {
  const [field] = useField(rest);

  return <FormControlLabel control={<Radio />} label={label} {...field} />;
};

export default LabeledRadio;
