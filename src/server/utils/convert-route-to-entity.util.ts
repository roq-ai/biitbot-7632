const mapping: Record<string, string> = {
  companies: 'company',
  messages: 'message',
  permissions: 'permission',
  roles: 'role',
  'role-permissions': 'role_permission',
  users: 'user',
  'user-roles': 'user_role',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
