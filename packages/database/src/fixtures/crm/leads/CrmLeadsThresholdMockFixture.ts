export function generateCrmLeadsThresholdMock(id: string): Record<string, any> {
  return {
    id,
    domain: "crm_leads",
    entity: "CrmLeadsThreshold",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
