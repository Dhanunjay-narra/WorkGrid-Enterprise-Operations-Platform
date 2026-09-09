export function generateCrmLeadsRecordMock(id: string): Record<string, any> {
  return {
    id,
    domain: "crm_leads",
    entity: "CrmLeadsRecord",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
