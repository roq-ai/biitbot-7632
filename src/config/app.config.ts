interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Owner'],
  customerRoles: [],
  tenantRoles: ['Owner', 'Administrator', 'Manager', 'Employee', 'Customer Support'],
  tenantName: 'Company',
  applicationName: 'biitbot',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [],
  ownerAbilities: [
    'Manage users',
    'Manage companies',
    'Manage messages',
    'Manage permissions',
    'Manage roles',
    'Manage user roles',
    'Manage role permissions',
  ],
  getQuoteUrl: 'https://app.roq.ai/proposal/224aeac7-98cb-4d4e-a6d1-f87458def5fe',
};
