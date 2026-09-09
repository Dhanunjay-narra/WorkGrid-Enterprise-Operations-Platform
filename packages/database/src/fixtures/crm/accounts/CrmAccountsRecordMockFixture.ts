export function generateCrmAccountsRecordMock(id: string): Record<string, any> {
  return {
    id,
    domain: "crm_accounts",
    entity: "CrmAccountsRecord",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
