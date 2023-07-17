import { IResponse } from "../../../types/response";
import { apiSlice } from "../api/apiSlice";
import { IAuth } from "../book/auth.interface";
import { IAuthLogin } from "./auth.interface";

export const authApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    authRegister: builder.mutation<IResponse<IAuth>, Partial<IAuth>>({
      query: (body) => ({
        url: `/auth/signup`,
        method: "POST",
        body,
      }),
    }),
    authLogin: builder.mutation<
      IResponse<IAuthLogin>,
      Pick<IAuth, "email" | "password">
    >({
      query: (body) => ({
        url: `/auth/login`,
        method: "POST",
        body,
      }),
    }),
  }),
});

export const { useAuthRegisterMutation, useAuthLoginMutation } = authApi;
