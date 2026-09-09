export function generateCrmHealthReportMock(id: string): Record<string, any> {
  return {
    id,
    domain: "crm_health",
    entity: "CrmHealthReport",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
