export function generateIdentityTransactionMock(id: string): Record<string, any> {
  return {
    id,
    domain: "identity",
    entity: "IdentityTransaction",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
