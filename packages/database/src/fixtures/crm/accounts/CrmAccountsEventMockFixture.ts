export function generateCrmAccountsEventMock(id: string): Record<string, any> {
  return {
    id,
    domain: "crm_accounts",
    entity: "CrmAccountsEvent",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
