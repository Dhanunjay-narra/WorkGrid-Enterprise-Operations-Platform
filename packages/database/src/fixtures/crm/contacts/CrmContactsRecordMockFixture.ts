export function generateCrmContactsRecordMock(id: string): Record<string, any> {
  return {
    id,
    domain: "crm_contacts",
    entity: "CrmContactsRecord",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
