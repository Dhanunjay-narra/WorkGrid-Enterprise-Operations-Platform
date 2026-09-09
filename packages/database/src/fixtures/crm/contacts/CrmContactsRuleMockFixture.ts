export function generateCrmContactsRuleMock(id: string): Record<string, any> {
  return {
    id,
    domain: "crm_contacts",
    entity: "CrmContactsRule",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
