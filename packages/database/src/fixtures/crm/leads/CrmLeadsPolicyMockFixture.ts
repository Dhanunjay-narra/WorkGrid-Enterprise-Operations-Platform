export function generateCrmLeadsPolicyMock(id: string): Record<string, any> {
  return {
    id,
    domain: "crm_leads",
    entity: "CrmLeadsPolicy",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
