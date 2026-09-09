export function generateCrmLeadsSummaryMock(id: string): Record<string, any> {
  return {
    id,
    domain: "crm_leads",
    entity: "CrmLeadsSummary",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
