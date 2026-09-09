export function generateCrmLeadsAssignmentMock(id: string): Record<string, any> {
  return {
    id,
    domain: "crm_leads",
    entity: "CrmLeadsAssignment",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
