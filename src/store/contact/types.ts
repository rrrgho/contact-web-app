export type ContactState = {
  status: boolean | undefined;
  firstName: string | undefined;
  lastName: string | undefined;
  age: string | undefined;
  photo: string | undefined;
  phone: string | undefined;
};

export type ContactList = {
  data: Array<ContactState>;
};
