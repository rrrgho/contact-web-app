interface IContactItem {
  id?: string;
  status?: boolean | undefined;
  firstName: string | undefined;
  lastName: string | undefined;
  age: any;
  photo: string | undefined;
  phone?: string | undefined;
}

export type { IContactItem };
