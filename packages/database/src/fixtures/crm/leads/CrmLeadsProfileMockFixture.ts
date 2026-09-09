export function generateCrmLeadsProfileMock(id: string): Record<string, any> {
  return {
    id,
    domain: "crm_leads",
    entity: "CrmLeadsProfile",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
