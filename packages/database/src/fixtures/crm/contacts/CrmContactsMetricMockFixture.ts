export function generateCrmContactsMetricMock(id: string): Record<string, any> {
  return {
    id,
    domain: "crm_contacts",
    entity: "CrmContactsMetric",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
