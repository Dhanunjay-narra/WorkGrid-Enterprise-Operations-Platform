export function generateCrmLeadsRuleMock(id: string): Record<string, any> {
  return {
    id,
    domain: "crm_leads",
    entity: "CrmLeadsRule",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
