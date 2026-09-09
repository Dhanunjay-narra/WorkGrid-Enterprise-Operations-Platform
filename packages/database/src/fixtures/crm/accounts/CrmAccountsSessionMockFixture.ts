export function generateCrmAccountsSessionMock(id: string): Record<string, any> {
  return {
    id,
    domain: "crm_accounts",
    entity: "CrmAccountsSession",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
