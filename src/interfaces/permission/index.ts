import { RolePermissionInterface } from 'interfaces/role-permission';
import { GetQueryInterface } from 'interfaces';

export interface PermissionInterface {
  id?: string;
  name: string;
  description?: string;
  created_at?: any;
  updated_at?: any;
  role_permission?: RolePermissionInterface[];

  _count?: {
    role_permission?: number;
  };
}

export interface PermissionGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  description?: string;
}
