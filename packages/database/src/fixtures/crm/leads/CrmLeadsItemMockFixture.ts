export function generateCrmLeadsItemMock(id: string): Record<string, any> {
  return {
    id,
    domain: "crm_leads",
    entity: "CrmLeadsItem",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
