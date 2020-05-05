export interface Plan {
  title: string;
  tag: string;
  timestamp: any;
  finished: boolean;
}
export interface Tag {
  name: string;
}
export interface PlanId extends Plan {
  id: string;
}
