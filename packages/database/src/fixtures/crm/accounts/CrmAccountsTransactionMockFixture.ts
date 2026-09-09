export function generateCrmAccountsTransactionMock(id: string): Record<string, any> {
  return {
    id,
    domain: "crm_accounts",
    entity: "CrmAccountsTransaction",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
