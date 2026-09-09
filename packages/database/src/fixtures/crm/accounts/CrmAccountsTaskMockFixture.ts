export function generateCrmAccountsTaskMock(id: string): Record<string, any> {
  return {
    id,
    domain: "crm_accounts",
    entity: "CrmAccountsTask",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
