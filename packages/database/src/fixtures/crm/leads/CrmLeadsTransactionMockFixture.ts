export function generateCrmLeadsTransactionMock(id: string): Record<string, any> {
  return {
    id,
    domain: "crm_leads",
    entity: "CrmLeadsTransaction",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
