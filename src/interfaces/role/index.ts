import { RolePermissionInterface } from 'interfaces/role-permission';
import { UserRoleInterface } from 'interfaces/user-role';
import { GetQueryInterface } from 'interfaces';

export interface RoleInterface {
  id?: string;
  name: string;
  description?: string;
  created_at?: any;
  updated_at?: any;
  role_permission?: RolePermissionInterface[];
  user_role?: UserRoleInterface[];

  _count?: {
    role_permission?: number;
    user_role?: number;
  };
}

export interface RoleGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  description?: string;
}
