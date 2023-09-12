import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
  DateTimeInput,
  ReferenceInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
  BooleanInput,
} from "react-admin";

import { UserTitle } from "./UserTitle";
import { OrganizationTitle } from "../organization/OrganizationTitle";
import { ProfileTitle } from "../profile/ProfileTitle";

export const UserEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Name" source="name" />
        <TextInput label="Bio" multiline source="bio" />
        <TextInput label="Email" source="email" type="email" />
        <NumberInput step={1} label="Age" source="age" />
        <DateTimeInput label="Birth Date" source="birthDate" />
        <NumberInput label="Score" source="score" />
        <ReferenceInput source="manager.id" reference="User" label="Manager">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
        <ReferenceArrayInput
          source="employees"
          reference="User"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={UserTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="organizations"
          reference="Organization"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={OrganizationTitle} />
        </ReferenceArrayInput>
        <TextInput label="Interests" multiline source="interests" />
        <TextInput label="Priority" multiline source="priority" />
        <BooleanInput label="Is Curious" source="isCurious" />
        <TextInput label="Location" source="location" />
        <TextInput
          label="Extended Properties"
          multiline
          source="extendedProperties"
        />
        <ReferenceInput source="profile.id" reference="Profile" label="Profile">
          <SelectInput optionText={ProfileTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
