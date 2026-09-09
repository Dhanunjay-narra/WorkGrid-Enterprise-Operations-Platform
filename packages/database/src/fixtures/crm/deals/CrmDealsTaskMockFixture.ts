export function generateCrmDealsTaskMock(id: string): Record<string, any> {
  return {
    id,
    domain: "crm_deals",
    entity: "CrmDealsTask",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
