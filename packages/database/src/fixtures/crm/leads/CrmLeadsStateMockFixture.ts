export function generateCrmLeadsStateMock(id: string): Record<string, any> {
  return {
    id,
    domain: "crm_leads",
    entity: "CrmLeadsState",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
