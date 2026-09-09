export function generateTenancyTransactionMock(id: string): Record<string, any> {
  return {
    id,
    domain: "tenancy",
    entity: "TenancyTransaction",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
