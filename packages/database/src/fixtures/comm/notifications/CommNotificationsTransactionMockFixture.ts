export function generateCommNotificationsTransactionMock(id: string): Record<string, any> {
  return {
    id,
    domain: "comm_notifications",
    entity: "CommNotificationsTransaction",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
