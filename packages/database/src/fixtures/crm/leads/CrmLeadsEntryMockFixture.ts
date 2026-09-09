export function generateCrmLeadsEntryMock(id: string): Record<string, any> {
  return {
    id,
    domain: "crm_leads",
    entity: "CrmLeadsEntry",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
