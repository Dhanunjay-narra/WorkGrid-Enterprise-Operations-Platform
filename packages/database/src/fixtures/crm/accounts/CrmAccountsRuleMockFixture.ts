export function generateCrmAccountsRuleMock(id: string): Record<string, any> {
  return {
    id,
    domain: "crm_accounts",
    entity: "CrmAccountsRule",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
