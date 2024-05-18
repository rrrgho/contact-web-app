// Types
import { IContactItem } from "@/d.type";
import { GetContactList, ContactState } from "./types";

// Store
import { emptySplitApi } from "@/store/base/base.api";

// Define a service using a base URL and expected endpoints
export const contactListApi = emptySplitApi.injectEndpoints({
  endpoints: (builder) => ({
    getContactAll: builder.query<GetContactList, string>({
      query: () => `contact`,
    }),
    createContact: builder.mutation<any, { payload: IContactItem }>({
      query: ({ payload }) => ({
        method: "POST",
        url: "contact",
        body: payload,
      }),
    }),
  }),
  overrideExisting: false,
});

export const { useGetContactAllQuery, useCreateContactMutation } =
  contactListApi;
