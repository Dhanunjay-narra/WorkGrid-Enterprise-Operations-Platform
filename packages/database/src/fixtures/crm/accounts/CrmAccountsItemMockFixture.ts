export function generateCrmAccountsItemMock(id: string): Record<string, any> {
  return {
    id,
    domain: "crm_accounts",
    entity: "CrmAccountsItem",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
