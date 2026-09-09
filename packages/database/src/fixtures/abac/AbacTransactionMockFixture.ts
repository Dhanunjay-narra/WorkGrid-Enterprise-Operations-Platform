export function generateAbacTransactionMock(id: string): Record<string, any> {
  return {
    id,
    domain: "abac",
    entity: "AbacTransaction",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
