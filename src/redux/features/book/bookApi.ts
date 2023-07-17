import { IResponse } from "../../../types/response";
import { apiSlice } from "../api/apiSlice";
import { IBook } from "./book.interface";

export const bookApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getBooks: builder.query<IResponse<IBook[]>, string>({
      query: (searchTerm) => ({
        url: `/books/${searchTerm ? `?searchTerm=${searchTerm}` : ""}`,
        method: "GET",
      }),
      providesTags: ["Books"],
      keepUnusedDataFor: 600,
    }),
    addBook: builder.mutation<IResponse<IBook>, Partial<IBook>>({
      query: (body) => ({
        url: `/books/add-book`,
        method: "POST",
        body: body,
      }),
      invalidatesTags: ["Books"],
    }),
    getBook: builder.query<IResponse<IBook>, string | undefined>({
      query: (id) => ({
        url: `/books/${id ? id : ""}`,
        method: "GET",
      }),
      providesTags: ["Book"],
    }),
    editBook: builder.mutation<IResponse<IBook>, Partial<IBook>>({
      query: (book) => ({
        url: `/books/${book.id ? book.id : ""}`,
        method: "PATCH",
        body: book,
      }),
      invalidatesTags: ["Book", "Books"],
    }),
    deleteBook: builder.mutation<IResponse<IBook>, string>({
      query: (id) => ({
        url: `/books/${id ? id : ""}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Book", "Books"],
    }),
  }),
});

export const {
  useGetBooksQuery,
  useAddBookMutation,
  useGetBookQuery,
  useEditBookMutation,
  useDeleteBookMutation,
} = bookApi;
