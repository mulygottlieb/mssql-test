import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  PasswordInput,
} from "react-admin";

export const MulyEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="username" source="username" />
        <PasswordInput label="pass" source="pass" />
      </SimpleForm>
    </Edit>
  );
};
