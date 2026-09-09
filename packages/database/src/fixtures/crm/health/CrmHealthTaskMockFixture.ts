export function generateCrmHealthTaskMock(id: string): Record<string, any> {
  return {
    id,
    domain: "crm_health",
    entity: "CrmHealthTask",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
