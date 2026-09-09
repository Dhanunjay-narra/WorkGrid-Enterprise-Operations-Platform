export function generateCrmAccountsPayloadMock(id: string): Record<string, any> {
  return {
    id,
    domain: "crm_accounts",
    entity: "CrmAccountsPayload",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
