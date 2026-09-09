export function generateCommNotificationsRecordMock(id: string): Record<string, any> {
  return {
    id,
    domain: "comm_notifications",
    entity: "CommNotificationsRecord",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
