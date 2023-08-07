interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Owner'],
  customerRoles: ['End User'],
  tenantRoles: ['Owner', 'Administrator'],
  tenantName: 'Organization',
  applicationName: 'PDF converter v3',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
};
