export function generateCrmContactsQueueMock(id: string): Record<string, any> {
  return {
    id,
    domain: "crm_contacts",
    entity: "CrmContactsQueue",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
