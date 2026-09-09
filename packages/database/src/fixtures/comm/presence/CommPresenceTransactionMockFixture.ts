export function generateCommPresenceTransactionMock(id: string): Record<string, any> {
  return {
    id,
    domain: "comm_presence",
    entity: "CommPresenceTransaction",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
