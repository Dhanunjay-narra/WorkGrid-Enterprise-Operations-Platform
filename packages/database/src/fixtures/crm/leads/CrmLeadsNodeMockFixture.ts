export function generateCrmLeadsNodeMock(id: string): Record<string, any> {
  return {
    id,
    domain: "crm_leads",
    entity: "CrmLeadsNode",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
