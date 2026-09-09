export function generateCrmLeadsMappingMock(id: string): Record<string, any> {
  return {
    id,
    domain: "crm_leads",
    entity: "CrmLeadsMapping",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
