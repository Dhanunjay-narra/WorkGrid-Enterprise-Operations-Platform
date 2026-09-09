export function generateCommNotificationsBatchMock(id: string): Record<string, any> {
  return {
    id,
    domain: "comm_notifications",
    entity: "CommNotificationsBatch",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
