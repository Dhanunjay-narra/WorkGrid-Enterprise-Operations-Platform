export function generateCrmLeadsQueueMock(id: string): Record<string, any> {
  return {
    id,
    domain: "crm_leads",
    entity: "CrmLeadsQueue",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
