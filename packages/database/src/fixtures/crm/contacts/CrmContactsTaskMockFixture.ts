export function generateCrmContactsTaskMock(id: string): Record<string, any> {
  return {
    id,
    domain: "crm_contacts",
    entity: "CrmContactsTask",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
