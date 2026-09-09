export function generateCrmAccountsPolicyMock(id: string): Record<string, any> {
  return {
    id,
    domain: "crm_accounts",
    entity: "CrmAccountsPolicy",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
