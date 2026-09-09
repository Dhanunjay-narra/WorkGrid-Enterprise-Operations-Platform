export function generateCrmAccountsStateMock(id: string): Record<string, any> {
  return {
    id,
    domain: "crm_accounts",
    entity: "CrmAccountsState",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
