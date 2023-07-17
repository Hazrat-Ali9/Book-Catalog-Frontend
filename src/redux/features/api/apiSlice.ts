import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// import { RootState } from "../../app/store";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://book-catalog-server-eight.vercel.app/api/v1/",
  }),
  tagTypes: ["Books", "Book"],
  endpoints: () => ({}),
});
