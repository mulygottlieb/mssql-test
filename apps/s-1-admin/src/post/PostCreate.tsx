import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  BooleanInput,
  TextInput,
  NumberInput,
  ReferenceInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { PostTitle } from "./PostTitle";

export const PostCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <BooleanInput label="Published" source="published" />
        <TextInput label="Title" source="title" />
        <NumberInput step={1} label="Author Id" source="authorId" />
        <ReferenceInput source="parent.id" reference="Post" label="Parent">
          <SelectInput optionText={PostTitle} />
        </ReferenceInput>
        <ReferenceArrayInput
          source="children"
          reference="Post"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={PostTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};
