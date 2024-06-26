import { routerTo } from "@/models/routes";

export interface Navigation{
  to: routerTo;
  name: string;
}

export interface OnlyChildrenProps {
  children?: React.ReactNode
}