export function generateCommNotificationsEntryMock(id: string): Record<string, any> {
  return {
    id,
    domain: "comm_notifications",
    entity: "CommNotificationsEntry",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
