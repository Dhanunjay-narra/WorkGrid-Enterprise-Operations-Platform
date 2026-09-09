export function generateCrmAccountsThresholdMock(id: string): Record<string, any> {
  return {
    id,
    domain: "crm_accounts",
    entity: "CrmAccountsThreshold",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
