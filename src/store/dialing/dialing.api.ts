// Types
import { DialingState } from "./types";

// Store
import { emptySplitApi } from "@/app/store/base/base.api";

// Define a service using a base URL and expected endpoints
export const contactListApi = emptySplitApi.injectEndpoints({
  endpoints: (builder) => ({
    getContactAll: builder.query<DialingState, string>({
      query: () => `contact`,
    }),
  }),
  overrideExisting: false,
});

export const { useGetContactAllQuery } = contactListApi;
