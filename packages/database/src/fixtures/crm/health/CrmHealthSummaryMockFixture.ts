export function generateCrmHealthSummaryMock(id: string): Record<string, any> {
  return {
    id,
    domain: "crm_health",
    entity: "CrmHealthSummary",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
