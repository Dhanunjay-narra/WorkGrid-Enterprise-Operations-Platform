export function generateCrmAccountsAssignmentMock(id: string): Record<string, any> {
  return {
    id,
    domain: "crm_accounts",
    entity: "CrmAccountsAssignment",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
