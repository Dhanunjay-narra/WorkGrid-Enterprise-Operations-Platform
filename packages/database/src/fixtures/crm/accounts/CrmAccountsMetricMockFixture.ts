export function generateCrmAccountsMetricMock(id: string): Record<string, any> {
  return {
    id,
    domain: "crm_accounts",
    entity: "CrmAccountsMetric",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
