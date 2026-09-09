export function generateCrmContactsBatchMock(id: string): Record<string, any> {
  return {
    id,
    domain: "crm_contacts",
    entity: "CrmContactsBatch",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
