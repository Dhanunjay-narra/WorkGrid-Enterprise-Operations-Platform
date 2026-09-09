export function generateCrmHealthQueueMock(id: string): Record<string, any> {
  return {
    id,
    domain: "crm_health",
    entity: "CrmHealthQueue",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
