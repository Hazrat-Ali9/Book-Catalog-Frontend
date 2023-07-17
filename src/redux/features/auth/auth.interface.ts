export type IAuthLogin = {
  accessToken: string;
};

export type IUser = {
  id: string;
  name: string;
  email: string;
  role: string;
};

export type IAuthSlice = {
  accessToken: string | null;
};
