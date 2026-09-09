export function generateCrmContactsAssignmentMock(id: string): Record<string, any> {
  return {
    id,
    domain: "crm_contacts",
    entity: "CrmContactsAssignment",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
