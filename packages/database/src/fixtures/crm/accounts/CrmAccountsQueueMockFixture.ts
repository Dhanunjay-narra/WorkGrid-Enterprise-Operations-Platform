export function generateCrmAccountsQueueMock(id: string): Record<string, any> {
  return {
    id,
    domain: "crm_accounts",
    entity: "CrmAccountsQueue",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
