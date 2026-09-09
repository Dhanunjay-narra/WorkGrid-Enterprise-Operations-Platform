export function generateCrmAccountsConfigMock(id: string): Record<string, any> {
  return {
    id,
    domain: "crm_accounts",
    entity: "CrmAccountsConfig",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
