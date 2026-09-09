export function generateCrmAccountsProfileMock(id: string): Record<string, any> {
  return {
    id,
    domain: "crm_accounts",
    entity: "CrmAccountsProfile",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
