// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IContactItem } from "../d.type";

// Define a service using a base URL and expected endpoints
export const contactListApi = createApi({
  reducerPath: "contactListApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://contact.herokuapp.com/",
  }),
  endpoints: (builder) => ({
    getContactAll: builder.query<IContactItem, string>({
      query: () => `contact`,
    }),
  }),
});

export const { useGetContactAllQuery } = contactListApi;
