export function generateAuthTransactionMock(id: string): Record<string, any> {
  return {
    id,
    domain: "auth",
    entity: "AuthTransaction",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
