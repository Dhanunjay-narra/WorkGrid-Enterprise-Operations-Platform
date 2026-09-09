export function generateCrmDealsReportMock(id: string): Record<string, any> {
  return {
    id,
    domain: "crm_deals",
    entity: "CrmDealsReport",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
