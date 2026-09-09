export function generateCrmDealsQueueMock(id: string): Record<string, any> {
  return {
    id,
    domain: "crm_deals",
    entity: "CrmDealsQueue",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
