export function generateCrmContactsPayloadMock(id: string): Record<string, any> {
  return {
    id,
    domain: "crm_contacts",
    entity: "CrmContactsPayload",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
