export type User = {
  username: string;
  password: string;
  docter: boolean;
}

export type HttpResponse<T> = {
  val: T;
  status: number
}
