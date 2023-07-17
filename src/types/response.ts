export type IResponse<T> = {
  data: T;
  statusCode: number;
  message: string;
  success: boolean;
};
