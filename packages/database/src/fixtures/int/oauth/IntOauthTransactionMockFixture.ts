export function generateIntOauthTransactionMock(id: string): Record<string, any> {
  return {
    id,
    domain: "int_oauth",
    entity: "IntOauthTransaction",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
