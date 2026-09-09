export function generateCrmHealthThresholdMock(id: string): Record<string, any> {
  return {
    id,
    domain: "crm_health",
    entity: "CrmHealthThreshold",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
