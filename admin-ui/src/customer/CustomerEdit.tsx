import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  BooleanInput,
  DateInput,
  NumberInput,
  ReferenceInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { OrganizationTitle } from "../organization/OrganizationTitle";
import { OrderTitle } from "../order/OrderTitle";

export const CustomerEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Email" source="email" type="email" />
        <TextInput label="First Name" source="firstName" />
        <TextInput label="Last Name" source="lastName" />
        <BooleanInput label="VIP" source="isVip" />
        <DateInput label="Birth Data" source="birthData" />
        <NumberInput
          label="Average Sale (-1500.00 - 1500.00)"
          source="averageSale"
        />
        <NumberInput
          step={1}
          label="Favorite Number (1 - 20)"
          source="favoriteNumber"
        />
        <TextInput label="Geographic Location" source="geoLocation" />
        <TextInput
          label="Comments (up to 500 characters)"
          multiline
          source="comments"
        />
        <TextInput
          label="Favorite Colors (multi-select)"
          multiline
          source="favoriteColors"
        />
        <TextInput label="Customer Type" multiline source="customerType" />
        <ReferenceInput
          source="organization.id"
          reference="Organization"
          label="Organization"
        >
          <SelectInput optionText={OrganizationTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="vipOrganization.id"
          reference="Organization"
          label="VIP Organization"
        >
          <SelectInput optionText={OrganizationTitle} />
        </ReferenceInput>
        <ReferenceArrayInput
          source="orders"
          reference="Order"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={OrderTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Edit>
  );
};
