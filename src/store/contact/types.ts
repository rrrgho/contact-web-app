export type ContactState = {
  id?: string;
  status: boolean | undefined;
  firstName: string | undefined;
  lastName: string | undefined;
  age: string | undefined;
  photo: string | undefined;
  phone: string | undefined;
};

export type GetContactList = {
  message: string;
  data: Array<ContactState>;
};
