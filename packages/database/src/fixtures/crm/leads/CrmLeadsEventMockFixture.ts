export function generateCrmLeadsEventMock(id: string): Record<string, any> {
  return {
    id,
    domain: "crm_leads",
    entity: "CrmLeadsEvent",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
