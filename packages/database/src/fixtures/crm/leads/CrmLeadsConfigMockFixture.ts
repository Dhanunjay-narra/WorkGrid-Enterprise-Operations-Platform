export function generateCrmLeadsConfigMock(id: string): Record<string, any> {
  return {
    id,
    domain: "crm_leads",
    entity: "CrmLeadsConfig",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
