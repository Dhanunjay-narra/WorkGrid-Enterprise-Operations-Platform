export function generateCrmLeadsReportMock(id: string): Record<string, any> {
  return {
    id,
    domain: "crm_leads",
    entity: "CrmLeadsReport",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
