export function generateCrmLeadsSessionMock(id: string): Record<string, any> {
  return {
    id,
    domain: "crm_leads",
    entity: "CrmLeadsSession",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
