export function generateCrmLeadsTaskMock(id: string): Record<string, any> {
  return {
    id,
    domain: "crm_leads",
    entity: "CrmLeadsTask",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
