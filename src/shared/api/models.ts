export interface IRoom {
  id: number;
  title: string;
  owner: string;
  isActive: boolean;
}

export interface IFunction {
  icon: string;
  iconActive: string;
  title: string;
  description: string;
  link: string;
}
