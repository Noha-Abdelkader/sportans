import { Plan, Pagination } from "./match";

 declare type Success_response<T> = {
  status: 200;
  data: T;
  plan?: Plan;
  pagination?: Pagination;
}&T;

declare type Failure_response = {
  status: number;
  error?: string;
  code?: string;
  events?: string;
  message?: string;
};


// Combined API response type
declare type API_Response<T> = Success_response<T> | Failure_response;
