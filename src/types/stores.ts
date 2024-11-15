export type User = {
  id: number;
  username: string;
  password: string;
  tasks: Task[];
  role: string;
};

export type Task = {
  id: number;
  title: string;
  completed: boolean;
  userId?: number;
};

export type TPromiseResponse<T> = {
  data: T;
  status: string;
};
