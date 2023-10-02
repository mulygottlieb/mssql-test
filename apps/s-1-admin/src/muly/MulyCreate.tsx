import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  PasswordInput,
} from "react-admin";

export const MulyCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="username" source="username" />
        <PasswordInput label="pass" source="pass" />
      </SimpleForm>
    </Create>
  );
};
