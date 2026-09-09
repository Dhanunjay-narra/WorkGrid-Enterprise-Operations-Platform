export function generateCrmAccountsNodeMock(id: string): Record<string, any> {
  return {
    id,
    domain: "crm_accounts",
    entity: "CrmAccountsNode",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
