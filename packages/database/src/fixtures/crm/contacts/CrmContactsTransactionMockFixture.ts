export function generateCrmContactsTransactionMock(id: string): Record<string, any> {
  return {
    id,
    domain: "crm_contacts",
    entity: "CrmContactsTransaction",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
