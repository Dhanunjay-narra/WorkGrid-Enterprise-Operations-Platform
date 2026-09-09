export function generateCrmLeadsBatchMock(id: string): Record<string, any> {
  return {
    id,
    domain: "crm_leads",
    entity: "CrmLeadsBatch",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
