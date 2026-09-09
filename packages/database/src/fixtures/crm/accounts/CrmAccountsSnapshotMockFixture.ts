export function generateCrmAccountsSnapshotMock(id: string): Record<string, any> {
  return {
    id,
    domain: "crm_accounts",
    entity: "CrmAccountsSnapshot",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
