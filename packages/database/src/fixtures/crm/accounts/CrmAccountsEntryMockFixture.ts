export function generateCrmAccountsEntryMock(id: string): Record<string, any> {
  return {
    id,
    domain: "crm_accounts",
    entity: "CrmAccountsEntry",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
