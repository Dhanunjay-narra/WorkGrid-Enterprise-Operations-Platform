export function generateCrmLeadsScheduleMock(id: string): Record<string, any> {
  return {
    id,
    domain: "crm_leads",
    entity: "CrmLeadsSchedule",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
