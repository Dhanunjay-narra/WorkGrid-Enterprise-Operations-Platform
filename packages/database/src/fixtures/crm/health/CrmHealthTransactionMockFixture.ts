export function generateCrmHealthTransactionMock(id: string): Record<string, any> {
  return {
    id,
    domain: "crm_health",
    entity: "CrmHealthTransaction",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
