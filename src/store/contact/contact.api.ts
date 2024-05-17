// Types
import { ContactList, ContactState } from "./types";

// Store
import { emptySplitApi } from "@/store/base/base.api";

// Define a service using a base URL and expected endpoints
export const contactListApi = emptySplitApi.injectEndpoints({
  endpoints: (builder) => ({
    getContactAll: builder.query<ContactList, string>({
      query: () => `contact`,
    }),
  }),
  overrideExisting: false,
});

export const { useGetContactAllQuery } = contactListApi;
