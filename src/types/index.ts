export interface City {
  code: string;
  name: string;
}

export interface PaginationParams {
  _limit: number;
  _page: number;
  _total: number;
}

export interface ListResponse<T> {
  data: T[];
  pagination: PaginationParams;
}

export interface Student {
  id?: string;
  name: string;
  age: number;
  mark: number;
  gender: 'male' | 'female';
  city: string;
  createdAt?: number;
  updateAt?: number;
}

export interface ParamsConfig {
  _page: number;
  _limit: number;
  _sort: string;
  _order: 'asc' | 'desc';

  [key: string]: any;
}
