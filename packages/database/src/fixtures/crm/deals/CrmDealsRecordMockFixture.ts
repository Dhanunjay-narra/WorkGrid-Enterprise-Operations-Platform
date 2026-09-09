export function generateCrmDealsRecordMock(id: string): Record<string, any> {
  return {
    id,
    domain: "crm_deals",
    entity: "CrmDealsRecord",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
