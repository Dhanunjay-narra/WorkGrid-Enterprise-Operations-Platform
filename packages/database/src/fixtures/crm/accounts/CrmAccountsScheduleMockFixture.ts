export function generateCrmAccountsScheduleMock(id: string): Record<string, any> {
  return {
    id,
    domain: "crm_accounts",
    entity: "CrmAccountsSchedule",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
